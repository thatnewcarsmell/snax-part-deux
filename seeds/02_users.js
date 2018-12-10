exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function () {
      return knex('users').insert([
        {
          "first_name":"Mr. Pants",
          "last_name":"Mr.",
          "email":"fuckyou@gmail.com",
          "hashed_password":"fu",
        }
      ]);
    });
};