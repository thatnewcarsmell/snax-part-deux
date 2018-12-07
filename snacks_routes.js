const express = require('express')
const router = express.Router()
const queries = require('./queries_snacks')

router.route('/')

    .get((req, res) => {
        queries.listAllSnacks().then(snacks => res.status(200).send(snacks))
    })


module.exports = router