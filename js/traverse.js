$(function(){

	// selecting all paragraphs in the page
	var pElems = $("p");

	// select the 3rd paragraph
	var thirdP = $("p").eq(2);
	console.log( thirdP );

	// get the contect of the 3rd paragraph
	console.log( thirdP.text() );

	// get the first paragraph
	var firstP = $("p").first();

	// content of the first p
	console.log( firstP.text() );

	// get the last paragraph
	var lastP = $("p").last();

	// content of the last p
	console.log( lastP.text() );

	// find the descendents li of ul#fruits-1
	var findElem = $("ul#fruits-1").find("li");

	// print all the descendents
	console.log( findElem );

	// total descendents found
	console.log( findElem.length );

	// children (descendents) li of ul#fruits-1
	var childrenElem = $("ul#fruits-1").children("li");

	// print all the descendents
	console.log( childrenElem );

	// total descendents found
	console.log( childrenElem.length );

	// get parent
	var parentElem = $("ul#fruits-2").parent();

	// print parent element
	console.log( parentElem );

	// get siblings
	var siblingsElem = $("li#sample").siblings();

	// print parent element
	console.log( siblingsElem );

	// loop through the paragraph using each() and print text
	$("div#container p").each(function( index, elem ) {
		console.log( elem );
		console.log( "Index: " + index + " Text: " + $(this).text() );
	});

})