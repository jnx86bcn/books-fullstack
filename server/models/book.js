const { Schema,model } = require('mongoose');

const BookSchema = new Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    isbn: {type: String, required: true},
    coverPath: {type: String, required: false},
    created: {type: Date, required: true, default: Date.now}
});

module.exports = model('Book', BookSchema);