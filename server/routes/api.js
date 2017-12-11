const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const News = require('../models/news');

const db = "mongodb://silenemongodb:Silene44@cluster0-shard-00-00-qonhe.mongodb.net:27017,cluster0-shard-00-01-qonhe.mongodb.net:27017,cluster0-shard-00-02-qonhe.mongodb.net:27017/meantuto?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin";
mongoose.Promise = global.Promise;


mongoose.connect(db, function(err){
	if(err){
		console.error("Erreur de connection à la base " + err);
	}
})

router.get('/', function(req, res){
	res.send('api works');
});

router.get('/news', function(req, res){
	console.log('Get request for news');
	/* Appel de l'API Sharepoint pour récupérer les actualités */
	

	News.find({})
	.exec(function(err,news){
		if (err){
			console.log("Erreur dans la récupération des news");
		} else {
			res.json(news);
		}
	});
});

module.exports = router;