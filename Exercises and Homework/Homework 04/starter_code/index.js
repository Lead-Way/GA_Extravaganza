// Level 1

// define what are score and ball element on the page. I don't understand why using El tho
let score = 0; 
let ballEl = document.getElementsByClassName ("js-ball");
let scoreEl = document.getElementsByClassName ("js-score");

// let ballEl = document.getElementsByClassName("js-ball");
console.log(ballEl)

let ballEl1 = document.querySelector(".js-ball");
console.log(ballEl1)

//define how the click is going to funtion
ballEl.addEventListener("click", function() {
    // define click will increase scores by 10
    score += 10;
    // define what condition should declare a winner. If the scores are over 100 then you decleare the winner
    if (score < 100) {
    scoreEL.innerText = score;
    } else {
    declareWinner();
    }
});

// Define what fuction of decleare winner is 
function declareWinner () {
    document.body.classList.add("game-over");
    // I don't really understand this part 
}


