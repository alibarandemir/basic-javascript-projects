//select dom elements
var eyeIcon = document.getElementById("eyeIcon");
var passwordInput = document.getElementById("password");
var passwordDom = document.getElementsByClassName("passwordStrength");
var signInBtn = document.getElementById("btn");
eyeIcon.style.cursor="pointer";

eyeIcon.addEventListener("click",changeIcon);
function changeIcon(){
    eyeIcon.classList.forEach((item)=>{
        eyeIcon.classList.remove(item);    
    })
    if(passwordInput.type === "password"){
        passwordInput.type="text";
        eyeIcon.classList.add("fa-solid");
        eyeIcon.classList.add("fa-eye-slash");
    }
    else{
        passwordInput.type="password";
        eyeIcon.classList.add("fa-sharp");
        eyeIcon.classList.add("fa-solid");
        eyeIcon.classList.add("fa-eye");
    }
}

//checking password strength
var passwordObject = {
    value:"",
    contains:[],
    lengt:"",
    score:0,
}
const checkPassword = (password)=>{
    passwordObject.length=password.length;
    console.log(password);
    if(password !== password.toLowerCase()){
        passwordObject.score+=10;
        passwordObject.contains.push("upperLetter");
    }
    if(password.length>6){
        passwordObject.score+=10;
        passwordObject.contains.push("minSixLetter");
    }
    if(isIncludeNumber(password)){
        passwordObject.score+=10;
        passwordObject.contains.push("includeNumber");
    }
    
    function isIncludeNumber(string){
        function containsNumber(string) {
            return /[0-9]/.test(string);
          }
        if(containsNumber(string)){
            return true;
        }
        else{
            return false;
        }
    }
    
    console.log(`Password score: ${passwordObject.score}`);
    if(passwordObject.score===30){
        passwordObject.value= "Strong";
        passwordDom[0].innerHTML = `Your password is ${passwordObject.value}`;
    }
    if(passwordObject.score===20){
        passwordObject.value = "Medium";
        passwordDom[0].innerHTML= `Your password is ${passwordObject.value}`;
    }
    if(passwordObject.score===10){
        passwordObject.value= "Weak";
        passwordDom[0].innerHTML = `Your password is ${passwordObject.value}`;
    }
    if(passwordObject.score===0){
        passwordObject.value = "Too Weak";
        passwordDom[0].innerHTML = `Your password is ${passwordObject.value}`;
    }
    
}
signInBtn.addEventListener("click",function(){
    checkPassword(passwordInput.value);
});


