const length1 = document.querySelector("#length-1");
const length2 = document.querySelector("#length-2");
const calculateHypotenuseBtn = document.querySelector("#calculate-hypotenuse");
const outputEl = document.querySelector(".output");

calculateHypotenuseBtn.addEventListener("click" , calchypo);

function calchypo(){
    var squareSum = ((Number(length1.value))*(Number(length1.value))) +((Number(length2.value))*(Number(length2.value)));
    var hypotenuse = Math.sqrt(squareSum);
    
    outputEl.innerText = hypotenuse;
}