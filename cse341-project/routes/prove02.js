const express = require('express');

const router = express.Router();

const books = [];

router.get('/',(req, res, next) => {
    res.render('pages/prove02', { 
        title: 'Book & Summary Input', 
        path: '/prove02', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
        booksArray: books
    });
    return res.end();
});

router.post('/display', (req, res) => {
    books.push(req.body);
    console.log(books);
    res.render('pages/prove02-display', { 
        title: 'Display Book Data', 
        path: '/prove02', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
        title: req.body.title,
        summary: req.body.summary
    });
});

module.exports = router;