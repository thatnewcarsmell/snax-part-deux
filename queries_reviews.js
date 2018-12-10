const db = require('./tha_database_connection')

module.exports = {
  listAllReviews(){
    return db('reviews')
  },
  getReviewById(user_id, snack_id){
    return db('reviews').where({
      'user_id': user_id,
      'snack_id': snack_id
    }).first()
  },
  createReview(newReview){
    return db('reviews').insert(newReview).returning('*')
  },
  editReview(changedProperty, user_id, snack_id){
    return db('reviews').where({
      'user_id': user_id,
      'snack_id': snack_id
    }).update(changedProperty).returning('*')
  },
  deleteReview(user_id, snack_id){
    return db('reviews').where({
      'user_id': user_id,
      'snack_id': snack_id
    }).del().returning('*')
  }
}