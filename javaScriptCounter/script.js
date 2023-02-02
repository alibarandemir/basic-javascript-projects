const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
let numberTag =document.getElementById("header").children[0];
let number = parseInt(numberTag.innerHTML);
increaseBtn.addEventListener("click",increase);
resetBtn.addEventListener("click",reset);
decreaseBtn.addEventListener("click",decrease);
function increase(){
    number+=1;    
    numberTag.innerHTML=number;
}
function reset(){
    number=0;
    numberTag.innerHTML=number;

}
function decrease(){
    number+=-1;
    numberTag.innerHTML=number;
}