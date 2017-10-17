// $(document).ready(function(){
// 	// code...
// });

$(function(){
	// $("body").append("<p>Hello World</p>");
	
	/**
	 * eq()
	 *
	 * note! index starts from 0
	 * where, index 0 is for the first element
	 * 		  index 1 is for the second element
	 * 		  ...
	 */
	/*
	var text = $("p").eq(2).text();	// index 2 means we are selecting the 3rd para
	console.log(text);

	var text2 = $("p").eq(4).text();
	console.log(text2);
	*/

	/**
	 * first()
	 */
	/*
	var text = $("p").first().text();
	console.log(text);
	*/

	/**
	 * last()
	 */
	/*
	var text = $("p").last().text();
	console.log(text);
	*/

	/**
	 * find()
	 */
	/*
	var elems = $("#fruits").find("li");
	console.log(elems);
	console.log("Number of descendents: " + elems.length);
	*/
	/*
	var elems = $("#fruits-2").find("li");
	console.log("Number of descendents: " + elems.length);
	*/

	/**
	 * children()
	 */
	// var elems = $("ul#fruits").children("li");
	// console.log("No. of descendents: " + elems.length);
	
	// var elems = $("ul#fruits-2").children("li");
	// console.log("No. of descendents: " + elems.length);
	
	/**
	 * parent()
	 */
	// var elem = $("#sample-fruit").parent();
	// console.log(elem);

	/**
	 * siblings()
	 */
	// var elems = $("li#sample-fruit").siblings();
	// console.log("No. of siblings: " + elems.length);

	/**
	 * each()
	 */
	$("#sample p").each(function( index, elem ) {
		console.log("Index: " + index);
		// console.log("Element: " + elem);
		console.log($(elem).text());
	});




});