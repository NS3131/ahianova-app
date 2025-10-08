// Export all models from a single file for easy importing
const User = require('./User');
const Farmer = require('./Farmer');
const Product = require('../models/Product');
const Order = require('./Order');
const Payment = require('../models/Payment');
const Review = require('./Review');
const Category = require('../models/Category');

module.exports = {
  User,
  Farmer,
  Product,
  Order,
  Payment,
  Review,
  Category
};
