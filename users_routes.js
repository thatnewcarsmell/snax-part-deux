const express = require('express')
const router = express.Router()
const queries = require('./queries_users')


router.route('/')

    .get(async (req, res) => {
        let user = await queries.getUserByEmail(req.params.email)
        if (user.email !== req.body.email || user.password !== req.body.password){
            return next({status: 400, message: 'Username or password incorrect.'})
        }
        res.status(200).send(true)
    })

    .post((req, res) => {
        let acceptableKeys = ['first_name', 'last_name', 'email', 'password']
        let valueChecks = Object.values(req.body)
        for (let keys in req.body){
            if (!acceptableKeys.includes(keys)) return next({status: 400, message: 'One or more keys was inaccurate.'})
        }
        for (let i = 0; i < valueChecks.length; i++) {
            if (valueChecks[i] === '') return next({status: 400, message: 'One or more keys was inaccurate.'})
        }
        queries.createUser(req.body).then(user => res.status(201))
    })


module.exports = router