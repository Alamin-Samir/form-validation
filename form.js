$(document).ready(function () {


$("form").submit(function (e) { 
    e.preventDefault();




let name=$("#name").val().trim();

let passwors=$("#password").val().trim();


let email=$("#email").val().trim();


 $("#error1").text("");

$("#error2").text("");
$("#error3").text("");

let hasError=false;

if(passwors.length<6){
    $("#error3").text("password error")
}





if(name===""){
    $("#error1").text("name must");
    hasError=true;
}








    
});



















});