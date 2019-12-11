const Note = require('../models/note.model.js');

// Create and Save a new Note
exports.create = (req, res) => {
    if(!req.body.content){
        return res.status(404).send({
            message: "noi dung Note con trong"
        });
    }

    // Create a Note
    const note = new Note({
     title: req.body.title || "Untiled Note",
     content: req.body.content
    });
    
    // Save note in the database
    note.save().then(data =>{
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "co mot so loi khi tao Note."
        });
    });
};

// Retrieve and return all notes from the database.
exports.findAll = (req, res) => {
     Note.find().then(notes => {
         res.send(notes);
     }).catch(err => {
         res.status.send({
            message: err.message || "Some error occurred while retrieving notes."
         });
     });
};

// Find a single note with a noteId
exports.findOne = (req, res) => {
    Note.findById(req.params.noteID).then(note  =>{
        if(!note){
            return res.status(400).send({
                message: "Note not found with id " + req.params.noteID
            });
        }
        res.send(note);
    }).catch(err =>{
        if(err.kind === 'ObjectId'){
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteID
            });
        }
        return res.status(500).send({
            message: "Error retrieving note with id " + req.params.noteID
        })
    })
    
};

// Update a note identified by the noteId in the request
exports.update = (req, res) => {
    // kieu tra noi co duoc fill vao chua
    if(!req.body.content){
        return res.status(404).send({
            message: "noi dung Note con trong"
        });
    }

    Note.findByIdAndUpdate(req.params.noteID,{
        title: req.body.title || "Note dai di",
        content: req.body.content
    },{new: true}).then(note =>{
        if(!note){
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteID
            })
        }
        res.send(note);
    }).catch(err =>{
        if(err.kind === 'ObjectId'){
            return res.status(404).send({
                message: "Sao khong dien gia tri he?"+ req.params.noteID
            });
        }
        return res.status(500).send({
            message: "loi cap nhat du lieu voi "+ req.params.noteID
        });
    });
      
};

// Delete a note with the specified noteId in the request
exports.delete = (req, res) => {
    Note.findByIdAndRemove(req.params.noteID).then( note =>{
        if(!note){
            return res.status(404).send({
                message: "khong tim thanh id nao"+ req.params.noteID
            })
        }
        return res.send(note);
    }).catch(err =>{
        return res.status(500).send({
            message:"khong the xoa document voi id"+req.params.noteID
        })
    })
};
