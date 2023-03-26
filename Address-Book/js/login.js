// window.addEventListener('submit', (element) => {
  

// });


// function forgotPassword(){

// }


  
const loginForm = document.getElementById('login-form');

loginForm.addEventListener('submit', function(event) {
  // prevent the default form submission behavior
  event.preventDefault();

  // get the password input element
  const passwordInput = document.getElementById('password');
  const phoneNumber = document.getElementById('phone');

  // check if the password matches the specified value
  if (passwordInput.value === '23081997' && phoneNumber.value == '9877040749') {
    window.location.href="homePage.html"
  } else {
    // if the password doesn't match, display an error message
    alert("Invalid UserName Password")
  }
});