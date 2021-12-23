let background          = document.querySelector(".main-container");
let gameContainer       = document.querySelector(".game-container");
let score               = document.querySelector("#score");
let currentScore        = 0;
let currentScoreDisplay = document.querySelector("#current-score-display");
let currentTurn         = 0;
let currentTurnDisplay  = document.querySelector("#current-turn-display");
let finalPercentage     = document.querySelector("#final-percentage");
let headerText          = document.querySelector("#header-text");
let artistTextContent   = document.querySelector("#artist-text-content");
let albumTextContent    = document.querySelector("#album-text-content");
let flagArtwork         = document.querySelector("#flag-artwork");
let countryText         = document.querySelector("#country-text-content");
let albumArtwork        = document.querySelector("#album-artwork");
const startButton       = document.querySelector("#start-button");
const submitButton      = document.querySelector("#submit-button");
const input             = document.querySelector("input");

// Function for game to select a random album from the Array and display it on the screen //
const randomAlbum = () => {

    // Check if it is the last album in array //
    if(albumsArray.length === 0) {
        input.style.display               = "none";
        submitButton.style.display        = "none";
        headerText.textContent            = "Your Score Was:";
        countryText.style.display         = "none";
        finalPercentage.textContent       = `${((currentScore / currentTurn) * 100).toFixed(1)}%`;
        artistTextContent.style.display   = "none";
        albumTextContent.innerText        = "You missed these albums:";
        albumArtwork.style.display        = "none";
        flagArtwork.style.display         = "none";
        score.style.display               = "none";
        currentScoreDisplay.style.display = "none";
        currentTurnDisplay.style.display  = "none";
        // styles to accommodate the list added below //
        gameContainer.style.height        = "auto";
        background.style.height           = "auto";
        background.style.width            = "auto";
        // display wrongGuessesArray as bulleted list on screen at end of game  //
        let ul = document.querySelector("#wrong-guesses-ul");
        for (i = 0; i < wrongGuessesArray.length; i++) {
            let li = document.createElement('li');
            li.innerHTML = wrongGuessesArray[i];
            ul.appendChild(li);
        }
    }

    // If it isn't the last album in the array, display a random album //
    else{
        let randomIndex               = Math.floor( Math.random() * (albumsArray.length) );
        albumYear                     = albumsArray[randomIndex].year;
        startButton.style.display     = "none";
        submitButton.style.display = "block";
        input.style.display        = "block";
        countryText.textContent       = albumsArray[randomIndex].country;
        artistTextContent.textContent = `${albumsArray[randomIndex].artist}`;
        albumTextContent.textContent  = `${albumsArray[randomIndex].album}`;
        albumArtwork.src              = albumsArray[randomIndex].imagePath;
        flagArtwork.src               = albumsArray[randomIndex].countryPath;
        // add album to correctGuessesArray //
        correctGuessesArray.push(`${albumsArray[randomIndex].album} = ${albumsArray[randomIndex].year}`);
        // remove current album from albumsArry with splice //
        albumsArray.splice([randomIndex], 1);
    }

};

// Function to alter the screen's look and score if the user gets the answer right //
const correctAnswer = () => {
    background.classList.add("correct-answer");
    background.classList.remove("wrong-answer");
    currentScore++;
    currentTurn++;
    currentScoreDisplay.textContent = currentScore;
    currentTurnDisplay.textContent  = currentTurn;
}

// Function to alter the screen's look and score if the user gets the answer wrong //
const wrongAnswer = () => {
    currentTurn++;
    currentTurnDisplay.textContent = currentTurn;
    background.classList.add("wrong-answer");
    background.classList.remove("correct-answer");
    // remove array from correctGuessesArray and add to incorrectGuessesArray //
    let wrongGuess = correctGuessesArray.pop();
    wrongGuessesArray.push(wrongGuess);
}

// Event listener for the "Submit Guess" button //
submitButton.addEventListener("click", function() {
    checkAnswer();
});
// Event listener for the enter key //
input.addEventListener("keypress", function (e) {
    if (e.code === "Enter") {
        checkAnswer();
    }
});

//Function to check if the user's input/answer matches the selected album's data //
const checkAnswer = () => {
    // variable that converts to a number since by default input makes it a string //
    let inputValue = Number(document.querySelector("input").value);
    if(inputValue === 0){
        alert("Please enter a year");
    } 
    else if(inputValue === albumYear){
        correctAnswer();
        randomAlbum();
    } 
    else {
        wrongAnswer();
        randomAlbum();
    }
}