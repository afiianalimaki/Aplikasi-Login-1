/*
 * Catatan:
 * Gunakan fungsi goToHome() untuk menampilkan halaman home
 * Gunakan fungsi goToLogin() untuk menampilkan halaman login
 * Gunakan fungsi showPopUp() untuk menampilkan pop up error
 */

// goToHome()
// gotoLogin()
// showPopUp()

const loginFormElement = document.querySelector('#loginForm');
const inputEmailElement = document.querySelector('#inputEmail');
const inputPasswordElement = document.querySelector('#inputPassword');

const expectedEmail = 'admin@dicoding.com';
const expectedPassword = 'tes1232';
loginFormElement.addEventListener('submit', function(event) {

    event.preventDefault();

    const email = inputEmailElement.value;
    const password = inputPasswordElement.value;
    
        if (email == expectedEmail && password == expectedPassword) {
            goToHome();
        } else {
            showPopUp();
        }
    
});