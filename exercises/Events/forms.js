const eric = document.querySelector('.eric');
eric.addEventListener('click', function(event) {
  // console.log('clicked the button');
  event.preventDefault();
  const shouldPageChange = confirm(
    'This website is not complete, do you wish to continue'
  );
  if (shouldPageChange) {
    window.location = event.currentTarget.href;
  }
  // console.log(shouldPageChange);
});

const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit', function name(event) {
    console.log(event);
    event.preventDefault();
});

function logEvent(event) {
    console.log(event.type)
}

signupForm.name.addEventListener('keyup', logEvent);