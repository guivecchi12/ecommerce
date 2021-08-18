exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('customer').del()
    .then(function () {
      // Inserts seed entries
      return knex('customer').insert([
        {name: 'Gui', address: 'my house'},
        {name: 'Rachel', address: 'her house'}
      ]);
    });
};
