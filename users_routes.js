const express = require('express')
const  router = express.Router()
const queries = require('./queries_users')


router.route('/')

    .get(async (req, res) => {
        let user = await queries.getUserByEmail(req.params.email)
        if (user.email !== req.body.email || user.hashed_password !== req.body.password){
            return next({status: 400, message: 'Username or password incorrect.'})
        }
        res.status(200).send(true)
    })

    .post((req, res, next) => {
        let valueChecks = Object.values(req.body)
        if (valueChecks.indexOf('') !== -1) return next({status: 400, message: 'Please fill out all required fields.'})
        queries.createUser(req.body).then(user => res.status(201).send(user))
    })

module.exports = router