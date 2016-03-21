var form = $('form');
var btn = $('#btn');

// form field variables
var inputField = $('input');
var userName = $('#user_name');
var email = $('#email');
var website = $('#website');
var message = $('#message');

function validate() {
	// error message variables
	// var empty = " cannot be left empty";
	// var emailError = "Email must contain an '@'";
	// var websiteError = "Website must start with http://";
	
	inputField.each(function(index) {
		if($(this).val() === '') {
			$('p').eq(index).html(index + ' cannot be blank');
		}
	});
	
	if (email.val().includes('@') === false) {
		$('#email_error').html("Email must contain an '@'")
	}

}

	// if(inputField.val() === '') {
	// return $('p').html($(this).attr('name') + 'cannot be blank');}

	// if(inputField.val() === '') {
	// return $('p').html('cannot be blank');

	// }

form.on('submit', function(e) {
	e.preventDefault();
	// create the function to handle the event
	validate()
});

	// $("input").each(function( index ) {
	// 	if($(this).val() === '') {
	// 		return $('p').html('cannot be blank');
	// 	}
	// }
