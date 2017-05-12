var orm = require("../config/orm.js");

var burger = {
	all: function(callback) {
		orm.selectAll("burgers", function(result) {
			callback(result);
		})
	},
	insert: function(cols, vals, callback) {
		orm.insertOne("burgers", cols, vals, function (result) {
			callback(result);
		})

	},
	update: function(condition, callback) {
		orm.updateOne("burgers", condition, function(result) {
			callback(result)
		})
	}
};

module.exports = burger;