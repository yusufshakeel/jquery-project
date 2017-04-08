$(function(){

	// selecting element by ID
	var usernameElem = $("#username");
	console.log(usernameElem);

	// selecting element by class
	var descriptionElem = $(".description");
	console.log(descriptionElem);

	// selecting element by tag p
	var pElem = $("p");
	console.log(pElem);

	// selecting body
	var bodyElem = $("body");
	console.log(bodyElem);

	// total paragraph in the body
	var pLength = $("p").length;
	console.log(pLength);

	// selecting element by id and tag
	var tagIdElem = $("p#username");
	console.log(tagIdElem);

	// selecting element by class and tag
	var tagClassElem = $("p.description");
	console.log(tagClassElem);

	// selecting direct descendents of ul.fruits-1
	var ulFruits1_DirectDescendentsElem = $("ul.fruits-1 > li");
	console.log(ulFruits1_DirectDescendentsElem);
	console.log(ulFruits1_DirectDescendentsElem.length);

	// selecting descendents of ul.fruits-1
	var ulFruits1_DescendentsElem = $("ul.fruits-1 li");
	console.log(ulFruits1_DescendentsElem);
	console.log(ulFruits1_DescendentsElem.length);


});