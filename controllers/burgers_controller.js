var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js")

router.get("/index", function(request, result) {
	burger.all(function(data) {
		var hbsObject = {
			burgers: data
		};
		result.render("index", hbsObject);
	});
});

router.post("/", function(request, result) {
	burger.insert("burger_name", request.body.name, function() {
		result.redirect("/index");
	});
});

router.put("/:id", function(request, result) {
	var condition = "id = " + request.params.id;

	burger.update(condition, function() {
		result.redirect("/index");
	});
});

module.exports = router;