const loginUser = document.getElementById("loginUser")
const loginPass = document.getElementById("loginPass")

document.getElementById("loginButton").addEventListener("click",function(){
   if(loginUser.value === "sazzdrn@gmail.com" && loginPass.value == 12500){
    window.location.assign("functional bank.html");
   }
   else{
    alert("kire beta password bhule geli?");
   }

})