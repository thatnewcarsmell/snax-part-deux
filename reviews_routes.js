const express = require('express')
const router = express.Router()
const queries = require('./queries_reviews')

router.route('/')

  .post((req, res, next) => {
    let valueChecks = Object.values(req.body)
    valueChecks.indexOf('') !== -1 && next({status: 400, message: 'Please fill out all required fields.'})
    queries.createReview(req.body).then(review => res.status(201).send(review))
  })

  .delete((req, res, next) => {
    queries.deleteReview(req.user_id, req.snack_id).then(review => res.status(200).send(review))
  })

  .put((req, res, next) => {
    queries.editReview(req.body, req.user_id, req.snack_id).then(review => res.status(200).send(review))
  })

module.exports = router