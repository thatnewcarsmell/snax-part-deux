const express = require('express')
const router = express.Router()
const queries = require('./queries_snacks')
const reQueries = require('./queries_reviews')

router.route('/')

  .get(async (req, res) => {
    let snacks = await queries.listAllSnacks()
    let reviews = await reQueries.listAllReviews()
    for (let i = 0; i < snacks.length; i++){
      let snack_id = snacks[i].id
      let theseReviews = reviews.filter(item => item.snack_id === snack_id)
      snacks[i].reviews = theseReviews
    }
    res.status(201).send(snacks)
  })

module.exports = router