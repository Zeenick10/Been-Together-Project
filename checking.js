
let Name = document.getElementById('inputName');
let email = document.getElementById('inputEmail');
let password = document.getElementById('Password');
let conPassword = document.getElementById("confirmPassword");

let register = document.getElementById('register');

register.addEventListener('click',function(){

    
    if(Name.value =="" || email.value=="" || password.value =="" || conPassword.value==""){
        alert("Please Fill your information!!");
    }else{
        console.log(Name.value);
        console.log(email.value);

        window.location.href="b.html";
    }


})
