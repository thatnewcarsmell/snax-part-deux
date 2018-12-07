const db = require('./tha_database_connection')

module.exports = {
    listReviewsIds(){
        return db('reviews').select('id')
    },
    listAllReviews(){
        return db('reviews')
    },
    getReviewById(id){
        return db('reviews').where('id', id).first()
    },
    createReview(newReview){
        return db('reviews').insert(newReview).returning('*')
    },
    editReview(changedProperty, id){
        return db('reviews').where('id', id).update(changedProperty).returning('*')
    },
    deleteReview(id){
        return db('reviews').where('id', id).del().returning('*')
    }
}