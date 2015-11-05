var express = require('express');
var router = express.Router();

var mongoose = require ('mongoose');
var Director = mongoose.model('Director');
/* GET users listing. */
router.get('/',function (req, res){

	Director.lista({_id: "563b2ef7de10e78513d26b1b"}, function (err, lista){
		if(err){
			console.log(err);
			return res.json({ok:false, error:err});
		}
		res.json({ok:true, data:lista});
	});

});




module.exports = router;
	
