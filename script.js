const logregbox = document.querySelector('.logreg-box');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');

registerlink.addEventListener('click', () => {
    logregbox.classList.add('active');
});
loginlink.addEventListener('click', () => {
    logregbox.classList.remove('active');
});