const baseOfTri = document.querySelector(".base");
const heigthOfTri = document.querySelector(".heigth");

const calAreaBtn = document.querySelector("#calc-area-btn");
const outputTri = document.querySelector("#output"); 


calAreaBtn.addEventListener("click", calculateArea);

function calculateArea(){
  if(Number(baseOfTri.value)> 0 & Number(baseOfTri.value)> 0){
    var area = 0.5*(Number(baseOfTri.value))*Number((heigthOfTri.value));
  outputTri.innerText = "area to triangle is : " + area + " cm2";
  }else{
    outputTri.innerText = "please enter positive value";
  }
  

}





