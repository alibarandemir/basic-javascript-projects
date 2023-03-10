//select dom elements
var eyeIcon = document.getElementById("eyeIcon");
var passwordInput = document.getElementById("password");

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



