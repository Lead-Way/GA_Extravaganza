// Level 1

// define what are scores and ball
let score = 0; 
let ballEl = document.getElemquerySelectorentsByClassName ("js-ball");
let scoreEl = document.getElementsByClassName ("js-score");

//define how the click is going to funtion
ballEl.addEventListener("click", function() {
    // define click will increase scores by 10
    score += 10;
    // dedine what condition should declare a winner. If the scores are over 100 then you decleare the winner
    if (score < 100) {
    scoreEL.innertext = score;
    } else {
    declareWinner();
    }
});

// Define what fuction of decleare winner is 
function declareWinner () {
    document.body.classList.add("game-over");
}


