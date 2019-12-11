const express = require('express');
const body = require('body-parser');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const app = express();

app.use(body.urlencoded({ extended: true }));
app.use(body.json());

// dinh nghia 1 route don gian

app.get('/', (req, res) => {
    res.json({ "message": "welcome to EasyNotes Application123" });
});

// Require Notes routes
require('./app/routes/note.routes.js')(app);

app.listen(3000, () => {
    console.log("server dang lang nghe yeu cau tu port 3000");
})