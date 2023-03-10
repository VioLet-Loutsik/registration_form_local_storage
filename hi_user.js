// достаем строку
const giveString = localStorage.getItem('newInfo')
// JSON.parse - из строки делает обьект
const getDataObject = JSON.parse(giveString)
console.log(getDataObject);
// из этого обьекта поличили имя
// у нас обьект находится в массиве
// поэтому сначала указываем порядковый номер обьекта
// только потом достаем имя
const givenName = getDataObject[0].name;
console.log(givenName);
const giveSalut = document.querySelector('.salut')
// giveSalut.innerHTML = 'privet' + ' ' + givenName
//  ${givenName} переменная в js 
// косые кавычки - с ними работает знак $
// с обычгыми не работает знак доллара и не увидим переменную
giveSalut.innerHTML = `Privet ${givenName}`;