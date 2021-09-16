const baseOfTri = document.querySelector(".base");
const heigthOfTri = document.querySelector(".heigth");

const calAreaBtn = document.querySelector("#calc-area-btn");
const outputTri = document.querySelector("#output"); 


calAreaBtn.addEventListener("click", calculateArea);

function calculateArea(){
  var area = 0.5*(baseOfTri.value)*(heigthOfTri.value);
  outputTri.innerText = "area to triangle is : " + area + " cm2";

}





