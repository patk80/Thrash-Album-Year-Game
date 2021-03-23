const startButton = document.querySelector("#startButton");
const submitButton = document.querySelector("#submitButton");
const input        = document.querySelector("input");
let background     = document.querySelector(".main-container");
let currentScore   = 0;
let currentTurn    = 0;

// Function to get select a random album from the Array and display it on the screen //
function randomAlbum() {

    // Check if it is the last album in array //
    if(albumsArray.length === 0) {
        input.style.display                                               = "none";
        submitButton.style.display                                        = "none";
        document.querySelector("#headerText").textContent                 = "Your Score Was:";
        document.querySelector("#countryTextContent").style.display       = "none";
        document.querySelector("#finalPercentage").textContent = ( (currentScore / currentTurn) * 100 ).toFixed(1) + "%";
        document.querySelector("#albumTextContent").style.display         = "none";
        document.querySelector("#albumArtwork").style.display             = "none";
        document.querySelector("#flagArtwork").style.display              = "none";
        document.querySelector("#score").style.display                    = "none";
        document.querySelector("#currentScoreDisplay").style.display      = "none";
        document.querySelector("#currentTurnDisplay").style.display       = "none";
    }

    // If it isn't the last album in the array, display a random album //
    else{
        let randomIndex               = Math.floor( Math.random() * (albumsArray.length) );
        albumYear                     = albumsArray[randomIndex].year;
        startButton.style.display    = "none";
        submitButton.style.visibility = "visible";
        input.style.visibility        = "visible";
        document.querySelector("#countryTextContent").textContent = albumsArray[randomIndex].country;
        document.querySelector("#albumTextContent").textContent   = albumsArray[randomIndex].artist + " — " + albumsArray[randomIndex].album;
        document.querySelector("#albumArtwork").src               = albumsArray[randomIndex].imagePath;
        document.querySelector("#flagArtwork").src                = albumsArray[randomIndex].countryPath;
        // remove current album from albumsArry with splice //
        albumsArray.splice([randomIndex], 1);
    }


};

//Function to check if the user's input/answer matches the selected album's data //
function checkAnswer() {
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

// Function to alter the screen's look and score if the user gets the answer right //
function correctAnswer() {
    background.classList.add("correct-answer");
    background.classList.remove("wrong-answer");
    currentScore++;
    currentTurn++;
    document.querySelector("#currentScoreDisplay").textContent = currentScore;
    document.querySelector("#currentTurnDisplay").textContent = currentTurn;
}
// Function to alter the screen's look and score if the user gets the answer wrong //
function wrongAnswer() {
    currentTurn++;
    document.querySelector("#currentTurnDisplay").textContent = currentTurn;
    background.classList.add("wrong-answer");
    background.classList.remove("correct-answer");
    // alert(albumYear + " was the correct answer");
}

// Event listener for the "Submit Guess" button //
submitButton.addEventListener("click", function() {
    checkAnswer();
});
// Event listener for the enter key //
input.addEventListener("keypress", function (e) {
    if (e.keyCode === 13) {
        checkAnswer();
    }
});
