const first_name = document.querySelector(".first_name");
const last_name = document.querySelector(".last_name");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const confirm_password = document.querySelector(".confirm_password");

const cl_submit = document.querySelector(".cl_submit");
console.log(first_name);

cl_submit.addEventListener("click", register);
const arrayData = [];

function register() {
  arrayData.push({
    name: first_name.value,
    lastname: last_name.value,
    email: email.value,
    password: password.value,
    confirm_password: confirm_password.value,
  });
  // переделываем массив с обьектом в массив со строками
  const dataComplete = JSON.stringify(arrayData);
  // console.log(dataComplete);
  localStorage.setItem("newInfo", dataComplete);
  console.log(first_name.value);
  // при клике юзера перекидывает на другую страницу в свои личный кабинет нр
  // window- обращение ко всему окну
  window.location.href = "hi_user.html";

// validation name field 
  const letters_name = /^[A-Za-z]+$/;
  if (letters_name.value.match(letters) ) {
    return true;
  } else {
    alert("User name must have alphabet characters only");
    // first_name.focus();
    // return false;
  }


  //  validation surname field
  // const letters_surname = /^[A-Za-z]+$/;
  // if (last_name.value.match(letters_surname) ) {
  //   return true;
  // } else {
  //   alert("User surname must have alphabet characters only");
  //   last_name.focus();
  //   return false; 
  // }
  // чтобы форма не отправлялассь и страница не обновлялась
}



// console.log(arrayData);
// localStorage.clear()
const cl_sign_in = document.querySelector(".cl_sign_in");
cl_sign_in.addEventListener("click", signinFunction);
function signinFunction() {
  window.location.href = "sign_in.html";
  console.log(hi);
}


// сначала проверяем все инпуты на пустоту