const mongoose = require('mongoose');
//const dbConfig = require('./config/database.config.js');

const NoteShema = mongoose.Schema({
    title: String,
    content: String
},{
    timestamps: true
});
var connection = mongoose.createConnection('mongodb://localhost:27017/appfirst', { useNewUrlParser: true, useUnifiedTopology: true });
module.exports = connection.model('Note', NoteShema);