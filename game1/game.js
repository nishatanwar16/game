let userscore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#userS");
const compscorepara = document.querySelector("#compS");

 const gencomchoice = () =>{
   const options = ["rock","paper","scissor"];
   const randam = Math.floor(Math.random()*3);
   return options[randam];
 }
 const drawgame = ()=>{
   msg.innerText = "game was drow try agian";
   msg.style.backgroundColor = "orange";
 }
 const showWinner = (userWin , userchoice,comChoice) =>{
   if(userWin){
      userscore++;
      userscorepara.innerText = userscore;
      msg.innerText = `yeah! your ${userchoice} beats ${comChoice}`;
      msg.style.backgroundColor ="green";
      
   }else {
      comScore++;
      compscorepara.innerText = comScore;
      msg.innerText = `oops ${comChoice} beats ${userchoice}`;
      msg.style.backgroundColor ="red";
   }
 }
const playgame = (userchoice)=>{
   const comChoice = gencomchoice();
   if(userchoice === comChoice){
    drawgame();
   }else{
      let userWin =true;
      if(userchoice === "rock"){
         userWin = comChoice === "paper" ? false : true;
      }else if (userchoice === "paper"){
         userWin = comChoice === "scissor" ? false : true; 
      } else {
         userWin = comChoice === "rock" ? false : true;
      }
      showWinner(userWin,userchoice,comChoice);
   } 
};
 choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
      const userchoice = choice.getAttribute("id")
     playgame(userchoice);
    })
 })