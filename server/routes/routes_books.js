const {Router} = require('express');
const {unlink} = require('fs-extra');
const path = require('path');
const router = Router();
const Book = require('../models/book');

//routes
//get
router.get('/',async (req,res)=>{
    const books = await Book.find();
    res.json(books);
});
//post
router.post('/',async (req,res)=>{
    const {title,author,isbn} = req.body;
    const coverPath = '/uploads/' + req.file.filename;
    const newBook = new Book({title,author,isbn,coverPath})
    await newBook.save();
    res.json({"message": "Book saved"});
});
//delete
router.delete('/:Id',async (req,res)=>{
    const book = await Book.findOneAndDelete(req.params.Id);
    await unlink(path.resolve('./public'+book.coverPath));
    res.json({"message": "Book deleted"});
});
module.exports = router;