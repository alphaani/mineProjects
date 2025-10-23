const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const message = document.getElementById('message');
const submitBtn = document.getElementById('submit');
const formMessage = document.getElementById('form-message');

submitBtn.addEventListener('click', function(e) {
    e.preventDefault(); // prevent form from reloading the page

    // Check if fields are empty
    if(fullname.value.trim() === '' || email.value.trim() === '' || message.value.trim() === '') {
        formMessage.style.color = 'red';
        formMessage.textContent = 'Please fill in all fields.';
        return;
    }

    // Simple email validation
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!email.value.match(emailPattern)) {
        formMessage.style.color = 'red';
        formMessage.textContent = 'Please enter a valid email.';
        return;
    }

    // Success message
    formMessage.style.color = 'green';
    formMessage.textContent = `Thank you, ${fullname.value}! Your message has been sent.`;

    // Clear inputs
    fullname.value = '';
    email.value = '';
    message.value = '';
});
