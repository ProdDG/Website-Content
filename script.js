var name = document.getElementById("name");
var email = document.getElementById("email");
var num = document.getElementById("num");
var button = document.getElementById("btn");

button.addEventListener("click",function(){
    localStorage.name = name.value;
    localStorage.email = email.value;
    localStorage.num = num.value;
});

