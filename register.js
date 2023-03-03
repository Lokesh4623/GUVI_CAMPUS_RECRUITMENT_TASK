$(document).ready(function() {
			// validate the form when the submit button is clicked
			$('form').submit(function(event) {
				// prevent the form from submitting
				event.preventDefault();
				
				// get the form data
				var name = $('#name').val();
				var email = $('#email').val();
				var password = $('#password').val();
                var dob = $('#dob').val();
                var gender = $('#gender').val();
                var age = $('#age').val();
                var phno = $('#phno').val();
				
				// validate the form data
				if (name == '') {
					alert('Please enter your name.');
					return false;
				}
				
				if (email == '') {
					alert('Please enter your email address.');
					return false;
				}
				
				if (password == '') {
					alert('Please enter a password.');
					return false;
				}
				
				if (dob== '') {
					alert('Please enter your date of birth.');
					return false;
				}

				if (phno == '') {
					alert('Please enter your phone number.');
					return false;
				}

				if (age == '') {
					alert('Please enter your age.');
					return false;
				}

				if (gender == '') {
					alert('Please enter your gender.');
					return false;
				}
				// submit the form if validation passes
				alert('Form validation passed. Submitting form...');
				$('form').unbind('submit').submit();
			});
		});
	