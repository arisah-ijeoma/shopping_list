var shopper = {
 
	addToList: function(event) {
		event.preventDefault();
		itemAdd = $('#intro').val();
		if (itemAdd === "undefined" || itemAdd === " " || itemAdd.length < 3 || !isNaN(itemAdd)) {
			$('div#alert').fadeIn('slow').text('Please type in a valid input').fadeOut(2000);
		} 
		else {
			$('ul.check').append('<li><input type= "checkbox" name= "checkbox" class= "checkbox">'+ itemAdd + '</li>')
			$('input#intro').val('');
		};
	},

	deleteFromList: function() {
		event.preventDefault();
		var reValidate = false;
		var check = $('input[type= "checkbox"]');
		$(check).each(function() {
			if (this.checked) {
				$(this).parent().remove();
				reValidate = true;
			}
		});
		if (!reValidate) {
			$('div#alert').fadeIn('slow').text('No item to delete').fadeOut(1000);
		}
	},		

	init: function() {
		$('#alert').hide();
		var itemAdd;
		$('#add').click(shopper.addToList);
		$('#delete').click(shopper.deleteFromList);
	}
}

$(document).ready(shopper.init);