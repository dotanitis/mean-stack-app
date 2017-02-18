var hotelsData = require('../data/hotel-data.json');

module.exports.hotelsGetAll = function(req,res){
	console.log('Get the hotels');
	console.log(req.query);

	var offset = 0;
	var count = 5;

	if (req.query && req.query.offset)
	{
		offset = parseInt(req.query.offset, 10);
	}
	
	if (req.query && req.query.count)
	{
		count = parseInt(req.query.count, 10);
	}

	var returnData = hotelsData.slice(offset, offset + count);
		res
			.status(200)
			.json( returnData )
};

module.exports.hotelsGetOne = function(req,res){
	var hotelId = req.params.hotelId;
	var singleHotel = hotelsData[hotelId];
	console.log('Get the hotels');
		res
			.status(200)
			.json( singleHotel )
};

module.exports.hotelsAddOne = function(req,res){
	console.log('Post new hotels');
	console.log(req.body);

	res
		.status(200)
		.json(req.body);

};

