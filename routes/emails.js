var express = require('express');
var router = express.Router();

var Email = require('../models/email');

/* POST to email */
router.post('/', function(req, res) {
    var email = req.body.email;
   
    console.log(req);
    console.log(req.body);

	// create a new user called chris
	var new_email = new Email({
	  email: email
	});

	console.log(new_email);

	new_email.save(function(err) {
	  if (err) throw err;
	  console.log('Email saved successfully!');
	});

	res.send(email);
});

module.exports = router;