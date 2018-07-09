var express = require('express');
var router = express.Router();
var Tag = require('../models/tag');

router.route('/')
	.post(function(req, res) {
		var tag = new Tag();
		tag.name = req.body.name;
		tag.save(function(err) {
			if (err)
				res.send(err);
			res.json({ message: 'Tag created!' });
		});
	})
	.get(function(req, res) {
	 	Tag.find(function(err, tags) {
	 		if (err)
	 			res.send(err);
	 		res.json(tags);
	 	});
	});
router.route('/:tag_id')
	.get(function(req, res) {
		Tag.findById(req.params.tag_id, function(err, tag) {
			if (err)
				res.send(err);
			res.json(tag);
		});
	})
	.put(function(req, res) {
		Tag.findById(req.params.tag_id, function(err, tag) {
			if (err)
				res.send(err);
			tag.name = req.body.name;
			tag.save(function(err) {
				if (err)
					res.send(err);
				res.json({ message: 'Tag updated!' });
			});
		});
	})
	.delete(function(req, res) {
		Tag.remove({
			_id: req.params.tag_id
		}, function(err, tag) {
			if (err)
				res.send(err);
			res.json({ message: 'Successfully deleted' });
		});
	});
module.exports = router;