var express = require('express');
var router = express.Router();
var Events = require('./events');
var Users = require('./users');
var Tags = require('./tags');

router.get('/', function(req, res) {
	res.send('OK');
});

router.use('/events', Events);
router.use('/users', Users);
router.use('/tags', Tags);

module.exports = router;