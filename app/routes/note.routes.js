const notes = require('../controller/note.controller.js');
module.exports = (app) => {
   
    // tao 1 note
    app.post('/notes',notes.create);

    // tim kiem tat ca cac note
    app.get('/notes', notes.findAll);

    //tim kiem 1 note voi idNote
    app.get('/notes/:noteID',notes.findOne);

    //cap nhat 1 note theo Idnote
    app.put('/notes/:noteID',notes.update);

    //Xoa 1 note voi idNote
    app.delete('/notes/:noteID',notes.delete);

}