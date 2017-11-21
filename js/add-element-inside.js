$(function(){

	// text() method
	
	// set the text using text()
	// $("#sample-p1").text("Hello World");

	//get the text using text()
	// var p = $("#sample-p1").text();
	// console.log(p);

	// html() method
	// var html = "<p>Hello World</p>";
	// $("#sample-div1").text(html);
	// $("#sample-div1").html(html);
	
	// append() method
	// $("#sample-div1").append("<p>Para 4</p>");
	
	// appendTo() method
	// $("<p>Para 4</p>").appendTo("#sample-div1");

	// prepend() method
	// $("#sample-div1").prepend("<p>Para 4</p>");

	// prependTo() method
	$("<p>Para 4</p>").prependTo("#sample-div1");
});