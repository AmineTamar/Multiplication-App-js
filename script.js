


const btnEl = document.querySelector(".btn")


btnEl.addEventListener("mouseover",(event)=>{
  const x = (event.pageX - btnEl.offsetLeft);
  const y = (event.pageY - btnEl.offsetTop);
  btnEl.style.setProperty("--xPos", x + "px")
  btnEl.style.setProperty("--yPos", y + "px")
  

  });

  const num1 = Math.ceil(Math.random()*10)
const num2 = Math.ceil(Math.random()*10)
let score = JSON.parse(localStorage.getItem("score"));
if(!score){
  score=0;
}

const questionEl = document.getElementById("question");
questionEl.innerText = `what is ${num1} Multiply by ${num2}`;

const crctAns = num1 * num2 ;

const inputEL = document.querySelector(".input")
const formEL = document.getElementById("submit")
const scoreEl = document.getElementById("score")
scoreEl.innerText=`Score = ${score}`;


formEL.addEventListener("submit",()=> {

const userAns = +inputEL.value 

if(userAns === crctAns){
  score++
  updateLocalStorage()
}
else if (userAns != crctAns) {
  score--
  updateLocalStorage()
}
if (inputEL.value==""){
  alert("please enter a number")
  score++
  updateLocalStorage()
}


})



/*function validateForm() {
  let validate = document.forms["myForm"]["fname"].value;
  if (validate == "") {
    alert("number must be filled out");
    return false;
  }
} */

function updateLocalStorage () {

  localStorage.setItem("score",JSON.stringify(score))
  

  }

  function reset (){
    score=0;
    scoreEl.innerText=`Score = ${score}`;
  }

 