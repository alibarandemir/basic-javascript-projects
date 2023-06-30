//dom elements
var bigImg = document.getElementById("bigImage");
var smallImgs = document.getElementById("smallImages");
var amountDom = document.getElementById("amount");
var minusBtn = document.getElementById("minusBtn");
var plusBtn = document.getElementById("plusBtn");
var submitBtn = document.getElementById("submitBtn");
var basket =document.querySelector("#basket");

//change images and styling of these
const changeBigImg=(imgSrc)=>{
    imgSrc = imgSrc.replace("-thumbnail","");
    console.log(imgSrc);
    bigImg.children[0].setAttribute('src',imgSrc);
    
}
for (let i = 0; i < smallImgs.children.length; i++) {
  smallImgs.children[i].addEventListener('click', function() {
  const imgSrc = smallImgs.children[i].getAttribute('src');
  console.log(imgSrc);
  changeBigImg(imgSrc);
  for(let k=0;k<smallImgs.children.length;k++){
    if(k!=i){
      smallImgs.children[k].classList.remove('active');
    }
  }
  smallImgs.children[i].classList.add("active");
  });
}
//increament amount of product
var amount = amountDom.innerHTML;
minusBtn.addEventListener("click",function(){
  if(amount>0){
    --amount;
  }
  else{
    amount=0;
  }
  amountDom.innerHTML=amount;
})
plusBtn.addEventListener("click",function(){
  amount++;
  amountDom.innerHTML=amount;
})

//when button clicked
const addBasket =()=>{

}
submitBtn.addEventListener("click",addBasket);