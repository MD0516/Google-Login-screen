var password=document.getElementById("txtPassword");
var Checkbox = document.getElementById("show");

Checkbox.addEventListener('click',function(){
    const type=password.getAttribute("type")==="password" ? "text" : "password";
    password.setAttribute("type",type);
})