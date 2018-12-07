
exports.up = function(knex, Promise) {
    return knex.schema.createTable('reviews', (review) => {
        review.increments('id')
        review.string('title')
        review.string('text')
        review.integer('rating')
        review.integer('snack_id')
        review.foreign('snack_id').references('snacks.id')
        review.integer('user_id')
        review.foreign('user_id').references('users.id') 
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('reviews')
};
