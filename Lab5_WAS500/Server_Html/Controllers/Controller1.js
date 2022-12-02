const books = require('../models/books');

exports.getBookID = (req,res,next) => {
    books.findById(req.params,(error,books) =>{
        if (error) next(error);
        req.data = books;
        next();
    });
};

exports.getBooks = (req,res,next) => {
    books.find({},(error,books)=>{
        if (error) next(error);
        req.data = books;
        next();
    })
}