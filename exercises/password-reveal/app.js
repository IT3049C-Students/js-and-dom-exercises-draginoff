

// 🤖: create 2 constants with references to the password input and the reveal button from the DOM
const togglePassword = document.querySelector(`#togglePassword`);
const password = document.querySelector(`#password`);

// 🤖: Create an Event Listener on the password reveal button
// 🤖: The event listener should toggle the password field attribute between `password` and `text` to change the visibility of the password field content.
togglePassword.addEventListener('click', function () {	
	if(password.type === 'password')
	{
		password.type='text';
		this.classList.toggle('bi bi-eye-slash');
	}
	else
	{
		password.type='password';
		this.classList.toggle('bi bi-eye-slash');
	}	
});



// Provided for you - prevent form submit
const form = document.querySelector("form");
form.addEventListener('submit',function(e){
	e.preventDefault();
});
