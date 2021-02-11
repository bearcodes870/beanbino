const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const userSchema = new mongoose.Schema({
    username: String,
})

module.exports = mongoose.model('User', userSchema);