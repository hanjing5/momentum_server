var express = require('express');
var router = express.Router();

/* POST to email */
router.post('/', function(req, res) {
    var email = req.body.email;
    res.send(email);

    console.log(req);
    console.log(req.body);
});

module.exports = router;