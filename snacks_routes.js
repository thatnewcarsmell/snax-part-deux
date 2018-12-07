const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    queries.listAllSnacks().then(snacks => res.status(200).send(snacks))
})