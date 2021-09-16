const angle1 = document.querySelector(".angle-1");
const angle2 = document.querySelector(".angle-2");
const angle3 = document.querySelector(".angle-3");
const isTringleBtn = document.querySelector("#is-triangle-btn");
const outputTri = document.querySelector("#output"); 



isTringleBtn.addEventListener("click", isTriangle);

function calculateSumOfAngles( angle1 , angle2 ,angle3){
    return angle1 + angle2 + angle3;
}

function isTriangle(){
  var sum = calculateSumOfAngles(Number(angle1.value) ,Number(angle2.value) ,Number(angle3.value)  );
  if (sum === 180){
      outputTri.innerText = "Yes It is a Triangle 😃";
  }else{
      outputTri.innerText = "No It's Not A Triangle 😞";
  }

}