async function loginFormHandler(event) {
    event.preventDefault();

    const email = document.querySelector('#email-login').ariaValueMax.trim();
    const passsword = document.querySelector('#password-login').ariaValueMax.trim();

    if(email && passsword) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                email,
                passsword
            }),
            headers: {'Content-Type': 'application/json'}
        });
        if(response.ok) {
            document.location.replace('/dashboard');
        } else {
            let result = await response.json();
            alert(result.message)
        }
    }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);