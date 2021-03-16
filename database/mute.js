const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    guild: String,
    user: String,
    süre: Number,
    başlangıç: Date,
    sebep: String
})

module.exports = mongoose.model('Mute', schema)
