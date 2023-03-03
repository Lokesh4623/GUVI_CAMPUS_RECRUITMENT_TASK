$(document).ready(function() {
			// validate the form when the submit button is clicked
			$('form').submit(function(event){
				// prevent the form from submitting
				event.preventDefault();
				
				// get the form data
				var email = $('#email').val();
				var password = $('#password').val();
                
				// validate the form data
				if (email == '') {
					alert('Please enter your email.');
					return false;
				}
				
				if (password == '') {
					alert('Please enter your password.');
				    return false;
				}
				
								
				// submit the form if validation passes
				alert('Form validation passed. Submitting form...');
				$('form').unbind('submit').submit();
		
			});
		});