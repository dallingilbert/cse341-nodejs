const express = require('express');
const fs = require('fs'); // File system for PROVE01
const router = express.Router();

router.get('/',(req, res, next) => {
    res.render('pages/twoInputs', { 
        title: 'Two Inputs', 
        path: '/prove01', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
    });
    return res.end();
});

router.post('/inputDisplay', (req, res) => {
    res.render('pages/twoInputDisplay', { 
        title: 'Two Inputs Display', 
        path: '/prove01', // For pug, EJS 
        activeTA03: true, // For HBS
        contentCSS: true, // For HBS
        input1: req.body.input1,
        input2: req.body.input2
    });
});

module.exports = router;