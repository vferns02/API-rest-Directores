'use strict';

var mongoose = require ('mongoose');

var directorSchema = mongoose.Schema({
	Nombre: String,
	Edad: Number,
	Pais: String,
	Peliculas: Array
});
	//metodo estatico, con uns criterios para filtrar la lista

	directorSchema.statics.lista = function (criterios, callback) {
		var query = Director.find(criterios);
		query.sort('Nombre');

		query.exec(function (err, rows){
			if(err){
				return callback(err);
			}
			return callback (null, rows);
		});
	};


	directorSchema.methods.get =function (idDirector, callback){
		return callback(null,this);
	};








var Director = mongoose.model('Director', directorSchema);


module.exports = Director;

