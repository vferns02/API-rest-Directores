var express = require('express');
var router = express.Router();

var mongoose = require ('mongoose');
var Director = mongoose.model('Director');
/* GET users listing. */
router.get('/',function (req, res){

	Director.lista({_id: "563b36d40181b799144f1c16"}, function (err, lista){
		if(err){
			console.log(err);
			return res.json({ok:false, error:err});
		}
		res.json({ok:true, data:lista});
	});

});




module.exports = router;
	
