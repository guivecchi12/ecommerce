const express = require('express');
const session = require('express-session');
const KnexSessionStore = require("connect-session-knex")(session);
const db = require('./data/configs');

const inventory = require('./API/inventory/inventory-router');
const order = require('./API/order/order-router');
const paid = require('./API/paid/paid-router');

const app = express();

app.use(express.json());

app.use('/inventory', inventory);
app.use('/order', order);
app.use('/paid', paid);

module.exports = app;