$(function(){

	// chaining method

	/*
	$("#sample-heading").css("font-size", "64px");

	$("#sample-heading").css("background-color", "lightyellow");

	$("#sample-heading").css("text-align", "center");
	*/

	// $("#sample-heading")
	// 	.css("font-size", "64px")
	// 	.css("background-color", "lightyellow")
	// 	.css("text-align", "center")
	// 	.text("Hi");
	
	$("#sample-heading")
		.css({
			"font-size" : "64px",
			"background-color" : "lightyellow",
			"text-align" : "center"
		})
		.text("Hi");
});