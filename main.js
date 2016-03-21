var form = $('form');
var btn = $('#btn');

// form field variables
var inputField = $('input');
var userName = $('#user_name');
var email = $('#email');
var website = $('#website');
var message = $('#message');

function validate() {
	$('p').html('')
	
	if(userName.val() === '') {
		$('#name_error').html('Name cannot be left empty');
	}

	  if(email.val() === '') {
		$('#email_error').html('Email cannot be left empty');
	} else if(email.val().includes('@') === false) {
		$('#email_error').html("Email must contain an '@'")
	} 

	  if(website.val() === '') {
		$('#website_error').html('Website cannot be left empty');
	} else if(website.val().includes('http://') === false) {
		$('#website_error').html("Website must start with http://")
	}

	  if(message.val() === '') {
		$('#message_error').html('Message cannot be left empty');
	}
}
	

form.on('submit', function(e) {
	e.preventDefault();
	// create the function to handle the event
	validate()
});




////////// WHY U NO WORK WITH OTHER IF STATEMENTS?
	// inputField.each(function(index) {
	// 	$('p').eq(index).html("");
	// 	if($(this).val() === '') {
	// 		$('p').eq(index).html(index + ' cannot be blank');
		
	// 	}
