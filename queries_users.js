const db = require('./tha_database_connection')

module.exports = {
    listUsersIds(){
        return db('users').select('id')
    },
    listAllUsers(){
        return db('users')
    },
    getUserById(id){
        return db('users').where('id', id).first()
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