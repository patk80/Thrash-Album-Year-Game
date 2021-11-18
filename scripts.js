const startButton  = document.querySelector("#start-button");
const submitButton = document.querySelector("#submit-button");
const input        = document.querySelector("input");
let background     = document.querySelector(".main-container");
let currentScore   = 0;
let currentTurn    = 0;

// Function for game to select a random album from the Array and display it on the screen //
const randomAlbum = () => {

    // Check if it is the last album in array //
    if(albumsArray.length === 0) {
        input.style.display                                                 = "none";
        submitButton.style.display                                          = "none";
        document.querySelector("#header-text").textContent                  = "Your Score Was:";
        document.querySelector("#country-text-content").style.display       = "none";
        document.querySelector("#final-percentage").textContent             = `${((currentScore / currentTurn) * 100).toFixed(1)}%`;
        document.querySelector("#album-text-content").style.display         = "none";
        document.querySelector("#album-artwork").style.display              = "none";
        document.querySelector("#flag-artwork").style.display               = "none";
        document.querySelector("#score").style.display                      = "none";
        document.querySelector("#current-score-display").style.display      = "none";
        document.querySelector("#current-turn-display").style.display       = "none";
    }

    // If it isn't the last album in the array, display a random album //
    else{
        let randomIndex                                             = Math.floor( Math.random() * (albumsArray.length) );
        albumYear                                                   = albumsArray[randomIndex].year;
        startButton.style.display                                   = "none";
        submitButton.style.visibility                               = "visible";
        input.style.visibility                                      = "visible";
        document.querySelector("#country-text-content").textContent = albumsArray[randomIndex].country;
        document.querySelector("#album-text-content").textContent   = albumsArray[randomIndex].artist + " – " + albumsArray[randomIndex].album;
        document.querySelector("#album-artwork").src                = albumsArray[randomIndex].imagePath;
        document.querySelector("#flag-artwork").src                 = albumsArray[randomIndex].countryPath;
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
    document.querySelector("#current-score-display").textContent = currentScore;
    document.querySelector("#current-turn-display").textContent = currentTurn;
    input.value = "";
}
// Function to alter the screen's look and score if the user gets the answer wrong //
const wrongAnswer = () => {
    currentTurn++;
    document.querySelector("#current-turn-display").textContent = currentTurn;
    background.classList.add("wrong-answer");
    background.classList.remove("correct-answer");
    input.value = "";
    // alert(albumYear + " was the correct answer");
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
