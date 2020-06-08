var selectedMovie = "";
var movieGuess = [];
var wrongGuess = [];
var remainingGuesses = 0;
var winCount = 1;
var guess = "";

function secondScreen() { 
    document.getElementById('gameInstructions').style.display='block';
    document.getElementById('pressKey').style.display='none';
    document.getElementById('demo').style.display='none';
}

function selectMovie() {
    var selectMovie = ["AVATAR", "BLACK PANTHER", "AVENGERS: ENDGAME", "THE LION KING", "FROZEN", "ALADDIN", "JOKER", "TOY STORY"]
    var myRandom = Math.floor(Math.random() * 8);
    return selectMovie[myRandom]
    }


function insertAnsweres() {
    var movieLength = selectedMovie.length;
    var wordL_ = "";
    var count = movieLength;

    while(count > 0) {
        movieGuess.push(" _ ");
        count -= 1;
    }
}

function countLetters() {
    document.getElementById('pressKey').style.display='none';
    document.getElementById('demo').style.display='none';
    var num = 0;
    var lettUsed = "";
    var count = selectedMovie.length;

    while(count > 0) {
        if(lettUsed.includes(selectedMovie[count - 1])) {
        }
        else{
            num += 1;
            lettUsed += selectedMovie[count - 1];
        }
        count -= 1;
    }
    return num;
}

function gameStart() {
    selectedMovie = selectMovie();
    winCount = countLetters();
    remainingGuesses = selectedMovie.length + 5;
    
    console.log(selectedMovie);
    document.getElementById('wordGame').style.display='block';
    document.getElementById('gameInstructions').style.display='none';
    document.getElementById("question").innerHTML = "Enter Your Guess Below: ";
    insertAnsweres();
    document.getElementById('gameStats').style.display='block';
    document.getElementById("rightGuess").innerHTML = "Letters Remaining: " + movieGuess;
    document.getElementById("wrongGuess").innerHTML = "Wrong Guesses: " + wrongGuess;
    document.getElementById("guessesLeft").innerHTML = "Remaining Guesses: " + remainingGuesses;
    
    var x = document.getElementById("guess").maxLength;
    
}

function enterGuess() {
    var lett = document.getElementById("guess").value;
    document.getElementById("guess").value = "";

    if (lett.length === 1){
        var rightOnot = movieIncludes(lett);
        if (rightOnot == true) {
            NewCW(lett);
        }
        else {
            if(!wrongGuess.includes(lett)) {
                console.log("hi");
                wrongGuess.push(lett);
            }
            remainingGuesses -= 1;
        }
    }
    else if (lett.length < 1) {
    }
    else {
        remainingGuesses -= 1;
    }
    if (remainingGuesses <= 0) {
        lostGame()
    }
    if (winCount <= 0) {
        wonGame()
    }

    document.getElementById("rightGuess").innerHTML = "Letters Remaining: " + movieGuess;
    document.getElementById("wrongGuess").innerHTML = "Guessed Letters: " + wrongGuess;
    document.getElementById("guessesLeft").innerHTML = "Remaining Guesses: " + remainingGuesses;
}

function movieIncludes(a) {
    var n = selectedMovie.includes(a);
    return n;
}

function NewCW(letter) {
    var count = 0;
    winCount -= 1

    while (count <= selectedMovie.length - 1) {
        if (letter === selectedMovie[count]) {
            if(movieGuess[count] === letter) {
            }
            else {
            }
            movieGuess[count] = letter;
            count += 1;
        }
        else {
            count += 1;
        }
    }
}

function lostGame() {
    document.getElementById('wordGame').style.display='block';
    document.getElementById('gameStats').style.display='block';
    document.getElementById('lost').style.display='block';
    document.getElementById("correctWordWas").innerHTML = "The Correct Movie Was: " + selectedMovie;

    selectedMovie = "";
    movieGuess = [];
    wrongGuess = [];
    remainingGuesses = 0;
    winCount = 1;
    guess = "";
    
    gameStart();
}

function wonGame() {
    document.getElementById('wordGame').style.display='block';
    document.getElementById('gameStats').style.display='block';
    document.getElementById('winner').style.display='block';

    selectedMovie = "";
    movieGuess = [];
    wrongGuess = [];
    remainingGuesses = 0;
    winCount = 1;
    guess = "";
    
    gameStart();
}

function restart() {
    document.getElementById('wordGame').style.display='block';
    document.getElementById('gameStats').style.display='block';
    document.getElementById('lost').style.display='none';
    document.getElementById('winner').style.display='none';

    selectedMovie = "";
    movieGuess = [];
    wrongGuess = [];
    remainingGuesses = 0;
    winCount = 1;
    guess = "";
    
    start();
}