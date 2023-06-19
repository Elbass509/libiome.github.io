//Algorithms for the programme

//create two variable containers to hold the two buttons

//create two containers for the divs holding the two divs

//create two event handlers for the two button

const loginButton = 

document.querySelector('.login-button');

const signupButton = 

document.querySelector('.signup-button');

loginButton.addEventListener('click',function(event){

  event.preventDefault();

  document.querySelector('.user-login').style.display =

  'block';

  document.querySelector('.user-signup').style.display =

    'none';

})

signupButton.addEventListener('click',function(event){

  event.preventDefault();

  document.querySelector('.user-signup').style.display =

    'block';

  document.querySelector('.user-login').style.display =

    'none';

})

//✅ working

const userEmail = document.querySelector('.email-el');

const emailValidator = '@gmail.com';

let reportEl = document.querySelector('.report');

let validator = document.querySelector('.valid');

//email validation icon change

userEmail.addEventListener('input', function() {

  let userEmailValue = userEmail.value;

  if (userEmailValue.toLowerCase().includes(emailValidator.toLowerCase())) {

    validator.innerHTML = '<i class="fa-regular fa-circle-check"></i>';

    reportEl.textContent = 'Email address is valid!';

    reportEl.style.color = '#16B0AC';

  } else {

    validator.innerHTML = '<i class="fa-regular fa-circle-xmark"></i>';

    reportEl.textContent = 'Enter a valid email';

    reportEl.style.color = '#ff0000';

  }

})

//✅ working

// For the Password Requirmenymt check

//I will be checking for password length by creating a variable to store user password and comparing it with another variable to make a decision

//I also will be checking if both password in confim password field and  password field are same by comparing the value of the input field for the first field to the second field

// Create an input event handler for the both fields

const userPassword = 

document.querySelector('#user-password');

let passwordReInput = 

document.querySelector('#password-reinput');

const passwordLengthIdeal = 

document.querySelector('.check1');

const bothFieldEqual =

  document.querySelector('.check2');

const passLengthComparer = 8;

//checking if password length is up to 8 characters

userPassword.addEventListener('input',function(){

  const userPasswordValue = userPassword.value;

  if (userPasswordValue.length >= passLengthComparer){

    passwordLengthIdeal.innerHTML = 

    '<i class="fa-regular fa-circle-check"></i>';

  }else{

    passwordLengthIdeal.innerHTML =

      '<i class="fa-regular fa-circle-xmark"></i>';

  }

})

//✅ working

//checking if both fields have same value

passwordReInput.addEventListener('input', function() {

  const passwordReInputValue = passwordReInput.value;

  if (passwordReInputValue == userPassword.value && passwordReInputValue.length == userPassword.value.length){

    bothFieldEqual.innerHTML =

      '<i class="fa-regular fa-circle-check"></i>';

  }else {

    bothFieldEqual.innerHTML =

      '<i class="fa-regular fa-circle-xmark"></i>';

  }

})

//✅ working

//To make password visible and invisible

const makePasswordVisible = 

document.querySelector('.makePasswordVisible');

const makePasswordInvisible = 

document.querySelector('.makePasswordInvisible');

const confirmVisible =

  document.querySelector('.confirmVisible');

const confirmInvisible =

document.querySelector('.confirmInvisible');

makePasswordVisible.addEventListener('click',function(event){

  event.preventDefault();

  if (userPassword.type === 'password') {

    userPassword.type = 'text';

    makePasswordVisible.style.display = 'none';

    makePasswordInvisible.style.display = 'inline';

  }else{

    userPassword.type = 'password';

  }

})

makePasswordInvisible.addEventListener('click', function(event) {

  event.preventDefault();

  if (userPassword.type === 'text') {

    userPassword.type = 'password';

    makePasswordVisible.style.display = 'inline';

    makePasswordInvisible.style.display = 'none';

  } else {

    userPassword.type = 'text';

  }

})

confirmInvisible.addEventListener('click', function(event) {

  event.preventDefault();

  if (passwordReInput.type === 'text') {

    passwordReInput.type = 'password';

    confirmVisible.style.display = 'inline';

    confirmInvisible.style.display = 'none';

  } else {

    userPassword.type = 'text';

  }

})

confirmVisible.addEventListener('click', function(event) {

  event.preventDefault();

  if (passwordReInput.type === 'password') {

    passwordReInput.type = 'text';

    confirmInvisible.style.display = 'none';

    confirmVisible.style.display = 'inline';

  } else {

    userPassword.type = 'password';

  }

})

// To Make the category selector functional

let displayChoice = 

document.querySelector('.displayChoice');

const openDropDown =

document.querySelector('.icon-button1');

const closeDropDown =

document.querySelector('.up-button');

const studentCategory =

document.querySelector('.student');

const teacherCategory =

document.querySelector('.teacher');

const researcherCategory =

document.querySelector('.researcher');

let categorySelector =

document.querySelector('.category-selector');

//Now that i have stored all variables i need to declear functionality

//Declearing functionalities for the drop-down buttons

openDropDown.addEventListener('click',function (event){

  event.preventDefault();

  if(categorySelector.style.display === 'none'){

    categorySelector.style.display = 'flex'

    openDropDown.style.display = 'none';

    closeDropDown.style.display = 'inline';

  }else{

    categorySelector.style.display = 'flex';

  }

})

closeDropDown.addEventListener('click', function(event){

  event.preventDefault();

  if (categorySelector.style.display === 'flex') {

    categorySelector.style.display = 'none'

    openDropDown.style.display = 'inline';

    closeDropDown.style.display = 'none'

  }else {

    categorySelector.style.display = 'none';

  }

})

// ✅ working

//Changing the input balue for displayChoice category when user selects a category

studentCategory.addEventListener('click', function(){

  const  studentValue = 'Student';

  displayChoice.value = studentValue;

  categorySelector.style.display = 'none';

  if (categorySelector.style.display === 'none') {

    categorySelector.style.display = 'flex'

    openDropDown.style.display = 'none';

    closeDropDown.style.display = 'inline';

  } else {

    categorySelector.style.display = 'flex';

  }

  

  if (categorySelector.style.display === 'flex') {

    categorySelector.style.display = 'none'

    openDropDown.style.display = 'inline';

    closeDropDown.style.display = 'none'

  } else {

    categorySelector.style.display = 'none';

  }

  

})

teacherCategory.addEventListener('click', function() {

  const TeacherValue = 'Teacher';

  displayChoice.value = TeacherValue;

  categorySelector.style.display = 'none';

  if (categorySelector.style.display === 'none') {

    categorySelector.style.display = 'flex'

    openDropDown.style.display = 'none';

    closeDropDown.style.display = 'inline';

  } else {

    categorySelector.style.display = 'flex';

  }

  

  if (categorySelector.style.display === 'flex') {

    categorySelector.style.display = 'none'

    openDropDown.style.display = 'inline';

    closeDropDown.style.display = 'none'

  } else {

    categorySelector.style.display = 'none';

  }

  

})

researcherCategory.addEventListener('click', function() {

  const researcherValue = 'Researcher';

  displayChoice.value = researcherValue;

  categorySelector.style.display = 'none';

  if (categorySelector.style.display === 'none') {

    categorySelector.style.display = 'flex'

    openDropDown.style.display = 'none';

    closeDropDown.style.display = 'inline';

  } else {

    categorySelector.style.display = 'flex';

  }

  

  if (categorySelector.style.display === 'flex') {

    categorySelector.style.display = 'none'

    openDropDown.style.display = 'inline';

    closeDropDown.style.display = 'none'

  } else {

    categorySelector.style.display = 'none';

  }

  

})

//���✅ working
