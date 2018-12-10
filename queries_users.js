const db = require('./tha_database_connection')

module.exports = {
  listUsersIds(){
    return db('users').select('id')
  },
  listAllUsers(){
    return db('users')
  },
  getUserByEmail(email){
    return db('users').where('email', email).first()
  },
  createUser(newUser){
    return db('users').insert(newUser).returning('*')
  },
  editUser(changedProperty, id){
    return db('users').where('id', id).update(changedProperty).returning('*')
  },
  deleteUser(id){
    return db('users').where('id', id).del().returning('*')
  }
}