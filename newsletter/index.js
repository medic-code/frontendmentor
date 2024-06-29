const form = document.getElementById('form');
const newsletter = document.getElementById('newsletter-container');
const success = document.getElementById('success');
const dismiss = document.getElementById('dismiss');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formDataEntries = new FormData(form)
    const { email } = Object.fromEntries(formDataEntries);
    const emailErrorMessage = validateEmail(email);
    console.log(emailErrorMessage, 'what')
    const emailMessageErrorElement = document.getElementById('newsletter-form__emailerror')
    switch(emailErrorMessage) {
        case 'Email is required':
            emailMessageErrorElement.style.display = 'flex'; 
            emailMessageErrorElement.innerText = emailErrorMessage; 
            break;
        case 'Please enter a valid email':
            emailMessageErrorElement.style.display = 'flex'; 
            emailMessageErrorElement.innerText = emailErrorMessage; 
            break;

        default:
            setTimeout(() => {
                success.style.display = 'flex';
                newsletter.style.display = 'none'; 
            },400)
            
    }
    // if (emailErrorMessage.startsWith('Please')) {
    //     console.log('invalid')
    //     const emailMessageErrorElement = document.getElementById('newsletter-form__emailerror')
    //     emailMessageErrorElement.innerText = emailErrorMessage;
    //     emailMessageErrorElement.style.dislay = 'flex';
    // } else {
    //     success.style.display = 'flex';
    //     newsletter.style.display = 'none';
    // }

})

function validateEmail(email) {
    if (!email) return 'Email is required';
    const isValidEmail = /^\S+@\S+$/g
    if (!isValidEmail.test(email)) {
        return 'Please enter a valid email';
    }

    return 'Valid'
}

dismiss.addEventListener('click',() => {
    setTimeout(() => {
        success.style.display = 'none';
        newsletter.style.display = 'flex';
    },400)
    
})