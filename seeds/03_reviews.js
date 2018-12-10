exports.seed = function(knex, Promise) {
  return knex('reviews').del()
    .then(function () {
      return knex('reviews').insert([
        {
          "title":"this food sucks!!!",
          "text":"This was the worst food I have EVER eaten!",
          "rating":2,
          "snack_id":4,
          "user_id":1
        }
      ]);
    });
};