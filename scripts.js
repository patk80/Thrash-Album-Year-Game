var submitButton = document.querySelector("#submitButton");
var input        = document.querySelector("input");
var background   = document.querySelector(".main-container");
var currentScore = 0;
var currentTurn  = 0;

function randomAlbum() {
    var randomIndex  = Math.floor( Math.random() * (albumsArray.length) );
    var randomButton = document.querySelector("#randomButton")
    albumYear        = albumsArray[randomIndex].year;
    randomButton.style.display = "none";
    submitButton.style.visibility = "visible";
    input.style.visibility        = "visible";
    document.querySelector("#countryTextContent").textContent = albumsArray[randomIndex].country;
    document.querySelector("#albumTextContent").textContent   = albumsArray[randomIndex].artist + " — " + albumsArray[randomIndex].album;
    document.querySelector("#albumArtwork").src               = albumsArray[randomIndex].imagePath;
    document.querySelector("#flagArtwork").src                = albumsArray[randomIndex].countryPath;
};

submitButton.addEventListener("click", function() {
    checkAnswer();
});

input.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        checkAnswer();
    }
});

function checkAnswer() {
    var inputValue = Number(document.querySelector("input").value); // variable that converts to a number since by default input makes it a string
    
    if(inputValue === 0){
        alert("Please enter a year");
    } else if(inputValue === albumYear){
        background.classList.add("correct-answer");
        background.classList.remove("wrong-answer");
        currentScore++;
        currentTurn++;
        document.querySelector("#currentScoreDisplay").textContent = currentScore;
        document.querySelector("#currentTurnDisplay").textContent = currentTurn;
        randomAlbum();
    } else {
        currentTurn++;
        document.querySelector("#currentTurnDisplay").textContent = currentTurn;
        background.classList.add("wrong-answer");
        background.classList.remove("correct-answer");
        alert(albumYear + " was the correct answer");
        randomAlbum();
    }
}
