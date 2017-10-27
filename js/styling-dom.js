$(function(){
	
	// css() method to style the elements
	// $("h1").css("font-size", "50px").css("color", "blue");
	
	$("h1").css({
		"font-size": "50px",
		"color": "blue"
	});

	$("#username").css({
		"font-size": "24px",
		"color": "green"
	});

	var color = $("#username").css("color");
	console.log(color);

	var fontSize = $("#username").css("font-size");
	console.log(fontSize);

	// style element by adding class
	// $("h1").addClass("bg-lightyellow hello-world");
	$("h1").toggleClass("bg-lightyellow hello-world");

	console.log("h1 has class hello-world? ", $("h1").hasClass("hello-world"));
	

	setTimeout(function(){
		// $("h1").removeClass("bg-lightyellow hello-world");
		$("h1").toggleClass("bg-lightyellow hello-world");
		console.log("h1 has class hello-world? ", $("h1").hasClass("hello-world"));
	}, 5000);


	// hide the element using the hide()
	setTimeout(function(){
		$("#sample").hide();
	}, 3000);

	// show the element using the show()
	setTimeout(function(){
		$("#sample").show();
	}, 7000);







});