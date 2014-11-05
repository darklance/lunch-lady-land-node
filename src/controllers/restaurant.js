/**
 * restaurant.js - Is a controller for restaurants
 */
var http = require('http');
var path = require("path");  
var url = require("url");

var restaurant = function() {};

/**
 * Decides what action needs to be done, returns response
 */
restaurant.prototype.processRequest = function(req, res){
	var type = req.method;	
	var succes = false;
	var url_parts = url.parse(req.url, true);
	var requestParam =  null;
	
	/**
	 * If deleting restaurant
	 * Else if adding restaurant
	 * Else if reading restaurant
	 * Else updating restaurant
	 */
	if(type === 'DELETE'){
		requestParam =  null; //TODO get request param from url_parts
		var exists = false;
		//exisits = TODO does restaurant exist
		if(exists){
			// success = TODO  deleting a restaurant;
		} else{
			success = false;
		}

		if(succes === false){
			res.writeHead(400);
		}
		else{
			res.writeHead(200);
		}	
		res.end();
	}else if(type === 'POST'){
		var addMe = null;
		req.setEncoding('utf8');
		req.on('data', function (body) {
			addMe = body;
		});
		//success = TODO addRestaurant(addMe);
		if(succes === false){
			res.writeHead(400);
		}
		else{
			res.writeHead(200);
		}
		res.end();
	}
	else if(type === 'GET'){
		requestParam = url_parts.pathname.split('/')[url_parts.pathname.split('/').length - 1]; 
		var returnJson = null;
		
		//Determine whether getting all or one restaurant .../users/{restaurantId} or .../restaurant?office={office id}
		if(!(isNaN(parseInt(requestParam)))){
			//TODO getRestaurantById(requestParam);
			returnJson = '{ "id" : 1, "name" : "Jimmy Johns", "address" : "123 Sesame St", "phone" : "555-555-5555", "office" : 123	}';
		}
		else{
			var office = url_parts.query.office;
			//TODO getRestaurantsByOffice(office);
			returnJson = '{"restaurants": ['+
				'{ "id" : 1, "name" : "Jimmy Johns", "address" : "123 Sesame St", "phone" : "555-555-5555", "office" : 123	},'+
				'{ "id" : 2, "name" : "Burger King", "address" : "567 Sesame Dr", "phone" : "555-555-3456", "office" : 123	}';
		}
		if(!(returnJson === null)){
			res.writeHead(200, {'Content-Type': 'application/json'});
			res.write(returnJson);
		}
		else{
			//TODO what to return when no results
		}	
		res.end();
	} else{
		requestParam =  null; //TODO get request param from url_parts
		//success = TODO update restaurant
		if(succes === false){
			res.writeHead(400);
		}
		else{
			res.writeHead(200);
		}		
		res.end();
	}
	//Return the response object
	return res;
};

module.exports = new restaurant();
