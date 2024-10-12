/* function play(){
    //hide the homepage
   const homeSection = document.getElementById('home-screen');
  homeSection.classList.add('hidden')

  //show the playground page
   const playGroundScreen =document.getElementById('play-ground-screen')
   playGroundScreen.classList.remove('hidden')
}*/

function handleKeyboardKeyUpEvent(event){
  const playerPress= event.key;
  console.log('player pressed',playerPress)
  //stop the game
  if(playerPress==='Escape'){
    gameOver();
  }
  // get the expected press
  const currentAlphabrtElement =document.getElementById('current-alphabet')
  const currentAlphabet = currentAlphabrtElement.innerText;
  const expectedAlphabet =currentAlphabet.toLowerCase();
  console.log(playerPress ,expectedAlphabet)
  //check matched or not
  if(playerPress===expectedAlphabet){
    console.log('You got a point')
    console.log('You have passed correctly',expectedAlphabet)
// update score
//get the current score
const currentScoreElement =document.getElementById('current-score');
const currentScoreText = currentScoreElement.innerText;
const currentScore = parseInt(currentScoreText);
console.log(currentScore);
//increase the score by 1
 const newScore = currentScore+1;
 //show the updated score
 currentScoreElement.innerText =newScore;




    //start a new round
    removeBackgroundColorById(expectedAlphabet),
    continueGame();
  }
  else{console.log('You missed.you lost a life')
      const currentLifeElement =document.getElementById('current-life')
      const currentLifeText = currentLifeElement.innerText;
      const currentLife =parseInt(currentLifeText);
      console.log(currentLife)

      const newLife = currentLife-1;
      currentLifeElement.innerText = newLife;

      if(  newLife===0){
   
        gameOver();
      }
  }
  
}

//capture keyboard press
document.addEventListener('keyup', handleKeyboardKeyUpEvent)

function continueGame(){
  const alphabet =getARandomAlphabet();
  //console.log('your random alphabet',alphabet)

  //set randomly generated alphabet to the screen
  const currentAlphabrtElement = document.getElementById('current-alphabet');
  currentAlphabrtElement.innerText = alphabet;
  //set background color
  setBackgroundColorById(alphabet);
}


function play(){
    hideElementById('home-screen');
    hideElementById('final-score-page')
    showElementById('play-ground-screen')
    continueGame();
}
function gameOver(){
  hideElementById('play-ground-screen');
  showElementById('final-score-page')

  const lastScore=document.getElementById('current-score')
  const finalPoint = parseInt(lastScore.innerText);
  lastScore.innerText = finalPoint;
  const finalResult = finalPoint;
  const currentScore = document.getElementById('final-value');
  currentScore.innerText = finalResult;


console.log(finalResult);
  
  
}