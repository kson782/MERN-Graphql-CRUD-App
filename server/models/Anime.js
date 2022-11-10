const mongoose = require('mongoose')

const AnimeSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    studio: {
        type: String,
    },
})

module.exports = mongoose.model('Anime', AnimeSchema);