


const btnElReset = document.querySelector(".reset");
const btnElSubmit = document.querySelector(".submitbtn");


btnElReset.addEventListener("mouseover",(event)=>{
  const x = (event.pageX - btnElReset.offsetLeft);
  const y = (event.pageY - btnElReset.offsetTop);
  btnElReset.style.setProperty("--xPos", x + "px")
  btnElReset.style.setProperty("--yPos", y + "px")
  

  });

  btnElSubmit.addEventListener("mouseover",(event)=>{
    const x2 = (event.pageX - btnElSubmit.offsetLeft);
    const y2 = (event.pageY - btnElSubmit.offsetTop);
    btnElSubmit.style.setProperty("--x2Pos", x2 + "px")
    btnElSubmit.style.setProperty("--y2Pos", y2 + "px")
    
  
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

 