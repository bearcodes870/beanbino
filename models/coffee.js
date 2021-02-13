const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const coffeeSchema = new Schema({
  name: String,
  region: String,
}, {
  timestamps: true
});

coffeeSchema.pre('save', function(next) {
  next();
});

module.exports = mongoose.model('Coffee', coffeeSchema);