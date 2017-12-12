// $(document).ready(function(){
// 	// code ...
// });

$(function(){
	// code ...
	
	// click() method
	// $("#sample-button1").click(function(){
	// 	console.log("Button Clicked!");
	// });
	
	// on() to handle the click event
	$("#sample-button1").on("click", function(){
		console.log("Button Clicked!");
	});

	// on() to handle the double click event
	$("#sample-button2").on("dblclick", function(){
		alert("Button Double Clicked!");
	});

	// submit() event
	$("#sample-form1").submit(function(){
		var text = $("#sample-input1").val();
		console.log(text);

		return false;
	});

	// on() to handle event by chaining them
	// off() method
	$("#sample-button3")
		.on("click", function(){
			console.log("Button clicked!");
			$("#sample-button3").off("click");
		})
		.on("dblclick", function(){
			console.log("Button double clicked!");
		});
	
});