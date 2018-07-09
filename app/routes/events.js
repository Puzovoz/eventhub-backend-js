var express = require('express');
var router = express.Router();
var Event = require('../models/event');

router.route('/')
	.post(function(req, res) {
		var event = new Event();
		event.name = req.body.name;
		event.save(function(err) {
			if (err)
				res.send(err);
			res.json({ message: 'Event created!' });
		});
	})
	.get(function(req, res) {
	 	Event.find(function(err, events) {
	 		if (err)
	 			res.send(err);
	 		res.json(events);
	 	});
	});
router.route('/:event_id')
	.get(function(req, res) {
		Event.findById(req.params.event_id, function(err, event) {
			if (err)
				res.send(err);
			res.json(event);
		});
	})
	.put(function(req, res) {
		Event.findById(req.params.event_id, function(err, event) {
			if (err)
				res.send(err);
			event.name = req.body.name;
			event.save(function(err) {
				if (err)
					res.send(err);
				res.json({ message: 'Event updated!' });
			});
		});
	})
	.delete(function(req, res) {
		Event.remove({
			_id: req.params.event_id
		}, function(err, event) {
			if (err)
				res.send(err);
			res.json({ message: 'Successfully deleted' });
		});
	});
module.exports = router;