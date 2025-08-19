const firstname=document.getElementById("Firstname")
const Surname=document.getElementById("Surname")
const email=document.getElementById("email")
const Gender=document.getElementById("Gender")
const Password=document.getElementById("Password")
const Confirmpassword=document.getElementById("Confirm_password")
/*console.log(firstname);
console.log(Surname);
console.log(email);
console.log(Gender);
console.log(Password);
console.log(Confirmpassword);*/

const container =document.getElementById("welcome")
const btn=document.getElementById("btn").addEventListener("click",onclicking);
function onclicking (){
    container.style.display="block";
}


const form=document.getElementById("form").addEventListener("submit",display);
function display (e){
  e.preventDefault();
   container.innerHTML=`
<h3>Hello, ${firstname.value} ${Surname.value}</h3>
<h5> Email: ${email.value}</h5>
<h5> Gender: ${Gender.value}</h5>`
;
}

