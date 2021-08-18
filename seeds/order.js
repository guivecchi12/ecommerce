const orders = [
    {customer: 1, inventory_sku: 1, quantity_ordered: 3},
    {customer: 1, inventory_sku: 3, quantity_ordered: 1},
    {customer: 2, inventory_sku: 2, quantity_ordered: 10},
  ]
  exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('order').del()
      .then(function () {
        // Inserts seed entries
        return knex('order').insert(orders);
      });
  };