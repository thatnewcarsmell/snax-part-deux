const db = require('./tha_database_connection')

module.exports = {
    listSnacksIds(){
        return db('snacks').select('id')
    },
    listAllSnacks(){
        return db('snacks')
    },
    getSnackById(id){
        return db('snacks').where('id', id).first()
    },
    createSnack(newKid){
        return db('snacks').insert(newKid).returning('*')
    },
    editSnack(changedProperty, id){
        return db('snacks').where('id', id).update(changedProperty).returning('*')
    },
    deleteSnack(id){
        return db('snacks').where('id', id).del().returning('*')
    }
}