// Level 1

// define what are score and ball element on the page. I don't understand why using El tho
let score = 0; 
let ballEl = document.querySelector(".js-ball");
let scoreEl = document.querySelector (".js-score");

console.log(ballEl)

//define how the click is going to funtion
ballEl.addEventListener("click", function() {
    // define click will increase scores by 1
    score += 10;
    // define what condition should declare a winner. If the scores are over 100 then you decleare the winner
    if (score < 100) {
    scoreEl.innerText = score;
    } else {
    declareWinner();
    }
});

// Define what fuction of decleare winner is 
function declareWinner () {
    document.body.classList.add("game-over");
    // I don't really understand this part 
}

