$(document).ready(function() {
	$('div#alert').hide();
	$('input#add').click(function(event) {
		event.preventDefault();
		var itemAdd = document.getElementById('intro').value;
			if (itemAdd === "undefined" || itemAdd === " " || itemAdd.length < 3 || !isNaN(itemAdd)) {
				var response = '<p>Please type in a valid input</p>';
				$('div#alert').fadeIn('slow').append(response).fadeOut(1000);
		}
			else {
				$('ul.check').append('<input type= "checkbox" name= "checkbox" class= "checkbox">' + itemAdd + "<br>")
				$('input#intro').val('');
			}
 	});
//  	$('input#delete').click(function(event) {
//  		event.preventDefault();
//  			$('ul.check:checked' + itemAdd).remove();
// });
 });