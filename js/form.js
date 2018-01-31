$(function(){

	// handling the submit event
	$("#sample-form").on("submit", function(){

		var data = {};

		data.name = $("#sample-input-text").val();

		data.email = $("#sample-input-email").val();

		data.password = $("#sample-input-password").val();

		data.fruit = $("#sample-select").val();

		data.description = $("#sample-textarea").val();

		data.os = [];
		$("input[name='sample-checkbox']:checked").each(function(){
			data.os.push(this.value);
		});

		data.device = $("input[name='sample-radio']:checked").val();

		data.iagree = "no";
		if ($("#required-checkbox").is(":checked")) {
			data.iagree = "yes";
		}

		console.log(data);

		return false;
	});
});