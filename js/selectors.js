// $(document).ready(function(){
// 	// code...
// });

$(function(){

	// select element by id and class
	
	// $("#username").css("color", "blue").css("font-size", "24px");
	$("#username").css({
		"color" : "blue",
		"font-size" : "24px"
	});

	$(".description").css("font-size", "18px");

	// select element by tag
	
	// var i = $("div").length;
	// console.log("No. of divs selected: " + i);
	$("div").css({
		"font-size" : "24px"
	});

	// select element by tag and id
	$("p#username").css("background-color", "yellow");

	// select element by tag and class
	$("p.description").css("background-color", "lightgreen");

	// select direct descendent
	var x = $("ul#fruits-1 > li").length;
	console.log("No. of direct descendent: " + x);

	// select descendent
	var y = $("ul#fruits-1 li").length;
	console.log("No. of descendent: " + y);







});