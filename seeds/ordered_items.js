const orders = [
    {order: 1, inventory_sku: 1, quantity_ordered: 3},
    {order: 1, inventory_sku: 3, quantity_ordered: 1},
    {order: 2, inventory_sku: 2, quantity_ordered: 10},
  ]
  exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('ordered_items').del()
      .then(function () {
        // Inserts seed entries
        return knex('ordered_items').insert(orders);
      });
  };