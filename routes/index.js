var express = require('express');
var router = express.Router();

var Email = require('../models/email');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.sendFile('public/index.html')
    //res.render('index', { title: 'Express' });
});

/* POST to email */
router.post('/email', function (req, res) {
    console.log(req.body);

    // create a new user called chris
    var new_email = new Email({
        email: req.body.email,
        message: req.body.message
    });

    console.log(new_email);

    new_email.save(function (err) {
        if (err) {
            console.log(err);
        }
        console.log('Email saved successfully!');
    });

    res.redirect('/');
});

module.exports = router;
