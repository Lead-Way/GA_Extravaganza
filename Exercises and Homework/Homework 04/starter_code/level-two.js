/*
 * DOTS: Level Two
 *
 */
// Defie elemenets what's a score and what's arena (3 balls) and score element 
let score = 0;
let arenaEl = document.querySelector('.js-arena');
let scoreEl = document.querySelector('.js-score');

// target areana elemenet and if someone clicks, what the function will be
arenaEl.addEventListener('click', function(e) {
    
    if (e.target.classList.contains('js-ball') ) {
    //if event (click) happenes, target the whole class that contains js-ball (so 3 balls) 
     // define click will increase scores by 10  
    score += 10;

      if ( score < 100 ) {
        scoreEl.innerText = score;
        //  define what condition should declare a winner. If the scores are over 100 then you decleare the winner
      } else {
        declareWinner();
      }
    }
  })
  
//   Once declareWinner happens add game-over class styling to the body's class 
  function declareWinner() {
    document.body.classList.add('game-over');
  }
