const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const newsSchema = new Schema({
    albumId:String,
	id:String,
	title:String,
	url:String,
	thumbnailUrl:String	
});


module.exports = mongoose.model('news', newsSchema, 'news');
