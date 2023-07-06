//dom elements
var bigImg = document.getElementById("bigImage");
var smallImgs = document.getElementById("smallImages");
var amountDom = document.getElementById("amount");
var minusBtn = document.getElementById("minusBtn");
var plusBtn = document.getElementById("plusBtn");
var submitBtn = document.getElementById("submitBtn");
var basket =document.querySelector("#basket");
var prdctAmountDom = document.getElementById("product-amount");
var dropDown = document.getElementById("drop-down");

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
    prdctAmountDom.innerHTML=amount;
    if(dropDown.children[2].innerHTML!="")
    if(amount==0){
      dropDown.children[2].innerHTML="";
      dropDown.children[2].innerHTML="Your Card is Empty!"
    }
    else{
      dropDown.children[2].innerHTML="";
      console.log(amount);
      dropDown.children[2].innerHTML=`<img style="float:left; margin:10px 12px 0px 7px " src="/images/image-product-1-thumbnail.jpg"/><p>Fall Limited Edition Sneaker </p><p style="display:inline-block;position:relative; left:50px;">$125.00 x ${amount} <span style="font-weight:bold;">$${125*amount}.00<span></p>`;

    }
}
submitBtn.addEventListener("click",addBasket);

basket.addEventListener("click",function(){
   dropDown.classList.forEach(element => {
      if(element=="hidden"){
        dropDown.classList.remove(element);
        dropDown.classList.add("block");
      }
      if(element=="block"){
        dropDown.classList.remove(element);
        dropDown.classList.add("hidden");
      }
   });
  })