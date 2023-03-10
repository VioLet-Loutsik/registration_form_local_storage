// достаем строку
const giveString = localStorage.getItem('newInfo')
// JSON.parse - из строки делает обьект
const getDataObject = JSON.parse(giveString)
console.log(getDataObject);
// из этого обьекта поличили имя
// у нас обьект находится в массиве
// поэтому сначала указываем порядковый номер обьекта
// только потом достаем имя
const givenEmail = getDataObject[0].email;
const givenPassword = getDataObject[0].password;
console.log(givenPassword);

// giveSalut.innerHTML = 'privet' + ' ' + givenName
//  ${givenName} переменная в js 
// косые кавычки - с ними работает знак $
// с обычгыми не работает знак доллара и не увидим переменную
// giveSalut.innerHTML = `Privet ${givenName}`;

const  cl_submit_signin = document.querySelector('.cl_submit_signin');
cl_submit_signin.addEventListener("click", signInFunction)
function signInFunction(){
    const emailvalue = givenEmail.value;
    if(givenEmail === emailvalue) {
        alert('ok')
    }else{alert('no')}
console.log(emailvalue);
}