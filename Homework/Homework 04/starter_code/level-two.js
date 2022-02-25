/*
 * DOTS: Level Two
 *Level 2 has 3 moving balls that the user can click on to increment their score. Implement a single click handler to listen for when a user clicks on one of the balls and increment their score until they reach 100.
 */
let score = 0;
let arenaEl = document.querySelector('.js-arena');
let scoreEl = document.querySelector('.js-score');

//implement listener - when user click score add 10
arenaEl.addEventListener("click", function(e){
    score += 10;
    console.log(e.target.classList)
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


