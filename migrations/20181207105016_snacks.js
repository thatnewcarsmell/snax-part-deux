
exports.up = function(knex, Promise) {
    return knex.schema.createTable('snacks', (snack) => {
        snack.increments('id')
        snack.string('name')
        snack.string('description')
        snack.boolean('is_perishable')
        snack.decimal('price', 6, 2)
        snack.string('img')
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('snacks')
};
