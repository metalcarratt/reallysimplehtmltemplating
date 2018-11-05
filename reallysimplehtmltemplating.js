/*
 * reallysimplehtmltemplating.js
 * Author: metalcarratt 2018    https://github.com/metalcarratt/
 * 
 */

var rsht = function(runafter) {
	$(".rsht").each(function (index) {
		var filename = $(this).attr("src");
		var element = $(this);
		$.ajax({
			async: false,
			type: 'GET',
			url: filename,
			success: function(data) {
				element.html(data);
			}
		});
	});
	runafter();
};
