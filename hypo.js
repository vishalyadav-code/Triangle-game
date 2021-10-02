const first= document.querySelector("#first");
const second= document.querySelector("#second");

const btn = document.querySelector("#check-btn");

btn.addEventListener('click', calculateHypotenuse) 
 

function processing(a,b){
    var sumOfSquares = a*a  + b*b
   
    return sumOfSquares
}

function calculateHypotenuse(){
    
    
   var sumOfSquares = processing(Number(first.value),Number(second.value))
    var lengthOfHypotenuse = Math.sqrt(sumOfSquares);

    if(first.value < 0){
        output.innerText = "length cannot be negative"
      } else if(second.value < 0){
        output.innerText = "length cannot be negative"
      } else if(first.value === ""){
        output.innerText = "Fill the length box so we can check"
     } else if(second.value === ""){
       output.innerText = "Fill the length box so we can check"
    }
       else{
        output.innerText = "The length of hypotenuse is: " + lengthOfHypotenuse
      }
}