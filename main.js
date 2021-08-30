const form = document.querySelector('form');
const user = document.querySelector('.user-input');
const password = document.querySelector('.password-input');

const login = document.querySelector('.login-btn').addEventListener('click', () => {
    if(user.value === '' || password.value === '')
        alert('Fill In All Fields!');
})