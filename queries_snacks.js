const db = require('./tha_database_connection')

module.exports = {
  listSnacksIds(){
    return db('snacks').select('id')
  },
  listAllSnacks(){
    return db('snacks')
    // .join('reviews', 'snacks.id', '=', 'reviews.snack_id').select('*')
  },
  getSnackById(id){
    return db('snacks').where('id', id).first()
  },
  createSnack(newSnack){
    return db('snacks').insert(newSnack).returning('*')
  },
  editSnack(changedProperty, id){
    return db('snacks').where('id', id).update(changedProperty).returning('*')
  },
  deleteSnack(id){
    return db('snacks').where('id', id).del().returning('*')
  }
}