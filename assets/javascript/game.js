
// array with all alphabet letters

var alphabet = [ 
    "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
    "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
    "u", "v", "w", "x", "y", "z"];

// variables needed

var correct = 0;
var incorrect = 0;
var guessesLeft = 10;
var lettersGuessed = [];
var psychicChoice = "";

// random psychic choice

function pGuess(){
    psychicChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log("The Psychic's choice is: " + psychicChoice);
}

// resets the game

var resetGame = function(){
    lettersGuessed = [];
    psychicChoice="";
    guessesLeft = 10;

// resets the letters guessed in html 

document.getElementById("guesses").innerHTML = lettersGuessed.join(",");

// resets the guesses left in html

document.getElementById("left").innerHTML =  guessesLeft;

pGuess();
}

// Actual game

// when a key is pressed
document.onkeyup = function(event){
        var userGuess = event.key.toLowerCase();

    //  only if the key pressed is part of the alphabet array: 

    if(userGuess === "a" || userGuess === "b" || userGuess === "c"|| userGuess === "d" || userGuess === "e" || userGuess === "f" || userGuess === "g" ||
        userGuess === "h"|| userGuess === "i" || userGuess === "j"|| userGuess === "k" || userGuess === "l"|| userGuess === "m" || userGuess === "n" || 
        userGuess === "o" || userGuess === "p" || userGuess === "q"|| userGuess === "r" || userGuess === "s" || userGuess === "t" || userGuess === "u" || 
        userGuess === "v" || userGuess === "w" || userGuess === "x"|| userGuess === "y" || userGuess === "z"){

    
    lettersGuessed.push(userGuess);
    document.getElementById("guesses").innerHTML = lettersGuessed.join(", ");
    

        if (userGuess === psychicChoice){
            correct++;
            document.getElementById("wins").innerHTML = correct;
            resetGame();
        }  
        else{
            guessesLeft--;
            document.getElementById("left").innerHTML =  guessesLeft;
                if(guessesLeft===0)
                {
                incorrect++;
                document.getElementById("losses").innerHTML = incorrect;
                resetGame();
                }
          
            }
        }
    };

pGuess();