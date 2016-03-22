var form = $('form');
var btn = $('#btn');

// form field variables
var inputField = $('input');
var userName = $('#user_name');
var email = $('#email');
var website = $('#website');
var message = $('#message');

// error message variables
var nameError = $('#name_error');
var emailError = $('#email_error');
var websiteError = $('#website_error');
var messageError = $('#message_error');

function validate() {
	// set initial html content to empty string
	$('p').html('')
	// validate name input
	if(userName.val() === '') {
		nameError.html('Name cannot be left empty');
	}
	// validate email input
	if(email.val() === '') {
		emailError.html('Email cannot be left empty');
	} else if(email.val().includes('@') === false) {
		emailError.html("Email must contain an '@'")
	} 
	// validate website input
	if(website.val() === '') {
		websiteError.html('Website cannot be left empty');
	} else if(website.val().includes('http://') === false) {
		websiteError.html("Website must start with http://")
	}
	// validate message input
	if(message.val() === '') {
		messageError.html('Message cannot be left empty');
	}

}
	

form.on('submit', function(e) {
	e.preventDefault();
	// create the function to handle the event
	validate()
	if(nameError.html() === '' && emailError.html() === '' && websiteError.html() === '' && messageError.html() === '') {
		$('form').html('thanks for contacting us, ' + userName.val() + '. We have received your message and will be in touch with you shortly')
	}

});


$('button').hover(
	function() {
	$(this).addClass('hover');
	}, function() {
		$(this).removeClass('hover');
	}
);


////////// WHY U NO WORK THE WAY I WANT U 2?
	// inputField.each(function(index) {
	// 	$('p').eq(index).html("");
	// 	if($(this).val() === '') {
	// 		$('p').eq(index).html(index + ' cannot be blank');
		
	// 	}
