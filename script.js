
    const first_name = document.querySelector('.first_name').value;
    const last_name = document.querySelector('.last_name').value;
    const email = document.querySelector('.email').value;
    const password = document.querySelector('.password').value;
    const confirm_password = document.querySelector('.confirm_password').value;
    const cl_button = document.querySelector('.cl_button');

    localStorage.setItem('first_name', first_name)
    localStorage.setItem('last_name', last_name)
    localStorage.setItem('email', email)
    localStorage.setItem('password', password)
    localStorage.setItem('confirm_password', confirm_password)


    cl_button.addEventListener('click', register)

    function register() {
        console.log(first_name);
    }