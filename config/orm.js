var connection = require("../config/connection.js");

var orm = {
	selectAll: function(table, callback) {
		var queryString = "SELECT * FROM " + table + ";";
		connection.query(queryString, function(error, result) {
			if(error) {
				throw error;
			}
			callback(result);
		});
	},

	insertOne: function(table, cols, vals, callback) {
		var queryString = "INSERT INTO " + table;
		queryString += " (";
		queryString += cols;
		queryString += ") ";
	    queryString += "VALUES (?) ";

	    console.log(queryString);

	    connection.query(queryString, vals, function(error, result) {
	    	if (error) {
	    		throw error;
	    	}
	    	callback(result);
	    });
	},

	updateOne: function(table, condition, callback) {
		var queryString = "UPDATE " + table;
		queryString += " SET devoured=TRUE WHERE "
		queryString += condition;

		console.log(queryString);

		connection.query(queryString, function(error, result) {
			if(error) {
				throw error;
			}
			callback(result);
		});
	}
};


module.exports = orm;