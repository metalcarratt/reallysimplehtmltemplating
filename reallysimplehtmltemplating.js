/*
 * reallysimplehtmltemplating.js
 * Author: metalcarratt 2018    https://github.com/metalcarratt/
 * 
 */

var rsht = function(runafter) {
	$(".rsht").each(function (index) {
		var filename = $(this).attr("src");
		var element = $(this);
		$.get(filename, function(data) {
			element.html(data);
			runafter();
		});
	});
};
