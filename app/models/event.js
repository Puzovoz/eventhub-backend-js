var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var EventSchema = new Schema({
	name: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('Event', EventSchema);