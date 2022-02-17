/*
 * DOTS: Level One
 * For level 1, implement a single event listener to the `.js-ball` element. When the user clicks on the ball, it should increment their score by 10 points. When the user reaches 100 points, they've beat the level and can move on!
 */
let score = 0;
let ballEl = document.querySelector('.js-ball');
let scoreEl = document.querySelector('.js-score');

//implement listener - when user click score add 10
ballEl.addEventListener("click", function(){
  score += 10;
//user reacher 100 - move on 
if (score > 100){
  declareWinner();
  } else {
  scoreEl.innerText = score;
  }
});

function declareWinner() {
  document.body.classList.add('game-over');
}