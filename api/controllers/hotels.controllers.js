var hotelsData = require('../data/hotel-data.json');

module.exports.hotelsGetAll = function(req,res){
	console.log('Get the hotels');
		res
			.status(200)
			.json( hotelsData )
};

module.exports.hotelsGetOne = function(req,res){
	var hotelId = req.params.hotelId;
	var singleHotel = hotelsData[hotelId];
	console.log('Get the hotels');
		res
			.status(200)
			.json( singleHotel )
};