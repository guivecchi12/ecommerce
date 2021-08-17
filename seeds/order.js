const orders = [
    {order_number: 1, inventory_sku: 1, quantity: 3},
    {order_number: 1, inventory_sku: 3, quantity: 1},
    {order_number: 2, inventory_sku: 2, quantity: 10},
  ]
  exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('order').del()
      .then(function () {
        // Inserts seed entries
        return knex('order').insert(orders);
      });
  };