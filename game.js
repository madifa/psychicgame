


alert('you have 7 guesses. Guess 1-7');



// Variables
var computerChoices = ["m", "a", "d", "i", "s", "o", "n"];
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
// var guess = ;
var win = 0;
var lose = 0;
var guessRemaining = 6;
// guess you made wrong
var yourGuess = [];


// runs program when you press key
document.onkeyup = function(event) {

    var userGuess = event.key;
    var userLower = userGuess.toLowerCase();



if(userGuess.indexOf(userLower)!== -1){


    if(userLower === computerGuess) {
        alert("you guessed correctly");
       //if u win
        win++;
        guessRemaining = 6;
    yourGuess = [];
    } else {
       (userLower != computerGuess);
        // if userGuess doesnt = to computerGuess then they lose a guess ;(
    guessRemaining--;
// if you lose
    }
if(guessRemaining === 0) {
    lose++;
    guessRemaining = 6;
    yourGuess = [];
}
    yourGuess.push(event.key)   
} 


// text on page
var html =
"<p>win: " + win + "</p>" +
"<p>lose: " + lose + "</p>" +
"<p>guessRemaining: " + guessRemaining + "</p>" +
"<p>your guess: " + yourGuess + "</p>"
;

document.querySelector("#game").innerHTML = html;



}



































