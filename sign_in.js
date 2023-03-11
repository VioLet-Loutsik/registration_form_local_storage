const  cl_sign_up = document.querySelector('.cl_sign_up')
cl_sign_up.addEventListener('click', goToSignUp)
function goToSignUp() {
    window.location.href = 'index.html';
    console.log(hi);
}


// достаем строку
const giveString = localStorage.getItem('newInfo')
// JSON.parse - из строки делает обьект
const getDataObject = JSON.parse(giveString)
console.log(getDataObject);
// из этого обьекта поличили имя
// у нас обьект находится в массиве
// поэтому сначала указываем порядковый номер обьекта в массиве
// только потом достаем имя
const givenEmail = getDataObject[0].email;
const givenPassword = getDataObject[0].password;
console.log(givenEmail);
console.log(givenPassword);

// giveSalut.innerHTML = 'privet' + ' ' + givenName
//  ${givenName} переменная в js 
// косые кавычки - с ними работает знак $
// с обычгыми не работает знак доллара и не увидим переменную
// giveSalut.innerHTML = `Privet ${givenName}`;

const  cl_submit_signin = document.querySelector('.cl_submit_signin');
const email_sign_in = document.querySelector('.email_sign_in');
const password_sign_in = document.querySelector('.password_sign_in');
const error_sign_in = document.querySelector('.error_sign_in')

console.log(email_sign_in.value);
cl_submit_signin.addEventListener("click", signInFunction)
function signInFunction(){
    if(givenEmail === email_sign_in.value && givenPassword === password_sign_in.value) {
        window.location.href = 'hi_user.html'
}else{error_sign_in.innerHTML = 'You must enter your email and password'}
console.log(email_sign_in.value);
}
