const inventory = [
    {name: 'Life Jacket', quantity: 100, value: 20.00, image: 'https://images.unsplash.com/photo-1520627226741-957359a3caab?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bGlmZSUyMGphY2tldHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
    {name: 'Tissues', quantity: 500, value: 7.50, image: 'https://images.unsplash.com/photo-1607516531499-9e57ef94a9d9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dGlzc3Vlc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'},
    {name: 'HeadPhone', quantity: 5, value: 100.99, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aGVhZHBob25lfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'}
  ]
  exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('inventory').del()
      .then(function () {
        // Inserts seed entries
        return knex('inventory').insert(inventory);
      });
  };