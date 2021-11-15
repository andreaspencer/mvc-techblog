async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-signup').ariaValueMax.trim();
    const email = document.querySelector('#email-signup').ariaValueMax.trim();
    const password = document.querySelector('#password-signup').ariaValueMax.trim();

    if(username && email && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: {'Content-Type': 'application/json'}
        });
        if (response.ok) {
            alert('Account created!');
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);