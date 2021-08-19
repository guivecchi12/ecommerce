exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('order').del()
    .then(function () {
      // Inserts seed entries
      return knex('order').insert([
        {total_cost: 160.99},
        {total_cost: 750.00},
      ]);
    });
};
