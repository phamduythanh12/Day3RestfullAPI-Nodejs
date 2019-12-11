const mongoose = require('mongoose');
const dbConfig = require('../config/database.config.js');

const NoteShema = mongoose.Schema({
    title: String,
    content: String
},{
    timestamps: true
});
var connection = mongoose.createConnection(dbConfig.url, { useNewUrlParser: true, useUnifiedTopology: true });
module.exports = connection.model('Note', NoteShema);