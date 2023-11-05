let randomNumber= Math.ceil(Math.random()*100)
let entryPar= document.querySelector(".number")
let startNum=document.querySelector(".first")
let finishNum=document.querySelector(".second")
let startButton=document.querySelector(".start")
let restartButton=document.querySelector(".restart")
let checkButton=document.querySelector(".check")
let chancePar= document.querySelector(".chance")
let guessInput=document.querySelector("#guess")
let resultPar= document.querySelector(".cong")
let userNumber=guessInput.value
let chanceSpan= document.querySelector(".chance-span")
let chance=8;


startButton.addEventListener("click", ()=>{
     guessInput.style.display="block";
     checkButton.style.display="block";
     startButton.style.display="none";
     guessInput.focus();
     fon.play()
})




checkButton.addEventListener("click",(e)=>{
     userNumber=guessInput.value
   if(userNumber==randomNumber){
     resultPar.textContent=` 👏 Congratulations You win ${chanceSpan.textContent*12.5} point 👏`;
     startButton.style.display="none";
     restartButton.style.display="block";
     guessInput.style.display="none";
     checkButton.style.display="none";
     chancePar.style.display="none";
     entryPar.style.display="none";
     applause.play();
 
}else{
     if (!userNumber) {
        resultPar.textContent="Lütfen gecerli bir sayı giriniz" 
        restartButton.style.display = "none"; 
        
     }else if(userNumber>randomNumber){
          resultPar.textContent="⬇️Please enter a lower number⬇️"
          down.play();
          finishNum.textContent=userNumber
          restartButton.style.display = "none";
          guessInput.value=""
          
     }else{
          resultPar.textContent="⬆️Please enter a higher number⬆️"
          startNum.textContent=userNumber
          chanceSpan.textContent=chance
          restartButton.style.display = "none";
          guessInput.value="";
          up.play();

     }
     chance--;
     chanceSpan.textContent=chance
     if (chance === 0) {
          resultPar.textContent = "😒Game Over😒 you did not have point";
          startButton.style.display = "none";
          guessInput.style.display = "none";
          checkButton.style.display = "none";
          chancePar.style.display = "none";
          entryPar.style.display = "none";
          loser.play();
          restartButton.style.display = "block";
        }
        

 }})
        
 restartButton.addEventListener('click', () => {
    window.location.reload();
    guessInput.focus();
       
});
