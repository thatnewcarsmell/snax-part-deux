const express = require('express')
const router = express.Router()
const queries = require('./queries')

router.get('/', (req, res) => {
    console.log('FUCK!')
    queries.listAllSnacks().then(snacks => res.status(200).send(snacks))
})

module.exports = router