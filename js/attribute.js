$(function(){

	// attr() method to get and set attributes
	
	// set single attribute
	// $("#sample-input").attr("value", "Super");
	

	// set multiple attributes
	$("#sample-input").attr({
		"value" : "Hello World",
		"class" : "awesome"
	});

	// get value of an attribute
	var classValue = $("#sample-input").attr("class");
	$("body").append("<p>Class attribute value: " + classValue + "</p>");

	var valueValue = $("#sample-input").attr("value");
	$("body").append("<p>Value attribute value: " + valueValue + "</p>");

});