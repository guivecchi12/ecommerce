const express = require('express');
// const session = require('express-session');
// const KnexSessionStore = require("connect-session-knex")(session);
// const db = require('./data/configs');

const inventory = require('./API/inventory/inventory-router');
const order = require('./API/order/order-router');
const items = require('./API/ordered_items/ordered_items-router');

const app = express();

app.use(express.json());

app.use('/inventory', inventory);
app.use('/order', order);
app.use('/items', items);

module.exports = app