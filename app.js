let userScore=0;
let compScore=0;

const choices=document.querySelectorAll('.choice')
const msg=document.querySelector("#msg")
const genCompChoice= () => {
const option = ['rock','paper','scissors'];
const randIdx=Math.floor(Math.random()*3)
return option[randIdx];
}
const drawGame = () => {
    console.log("game was draw");
    msg.innerHTML="game was draw and play again !"
}

const showWinner = (userWin) => {
    if(userWin){
        console.log("you win!");
        msg.innerHTML=" you win!"
    } else{
        console.log(" you lose");
        msg.innerHTML="'you lose !"
    }
}

const playGame= (userChoice)=>{
    console.log("user choice =", userChoice);
    // generte computer choice
  const compChoice=genCompChoice();
  console.log("comp choice = ", compChoice);
  if(userChoice==compChoice){
    // drawGame
    drawGame();


  }else{
    let userWin= true;
    if(userChoice==="rock"){
         //scissors,paper
    userWin = compChoice === "paper" ? false : true;
    }else if(userChoice=== "paper"){
        // rock , scissors
        userWin = compChoice === "scissors" ? false : true;

    }else{
        //rock , paper
        userWin = compChoice === "scissors" ? false : true;
    }
  showWinner(userWin)
  }
}

choices.forEach((choice)=>{
   choice.addEventListener("click", () =>{
    const userChoice=choice.getAttribute("id")
    // console.log("choice was clicked", userChoice);
    playGame(userChoice)
   });
});