$(function(){

	// click event handler using the .on() method
	// $(".sample-button").on("click", function(){
	// 	alert($(this).text() + " clicked!");
	// });

	// using event delegation to add click event handler
	$("#sample-container").on("click", ".sample-button", function(){
		alert($(this).text() + " clicked!");
	});

	// we will add a new button Button 3 after three seconds
	setTimeout(function(){
		var btnHTML = "<button class='sample-button'>Button 3</button>";
		$("#sample-container").append(btnHTML);
	}, 3000);

});