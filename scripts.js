var Array = [
    {
        album: "Peace Sells... but Who's Buying?",
        albumURL: "https://images-na.ssl-images-amazon.com/images/I/61KgZqvSZxL.jpg",
        artist: "Megadeth",
        country: "USA",
        countryURL: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png",
        year: 1986,
    },
    {
        album: "So Far, So Good... So What!?",
        albumURL: "https://images-na.ssl-images-amazon.com/images/I/61fhln7HesL.jpg",
        artist: "Megadeth",
        country: "USA",
        countryURL: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png",
        year: 1988,
    },
    {
        album: "Alice in Hell",
        albumURL: "https://lastfm.freetls.fastly.net/i/u/500x500/ec6cf022a31ed93a1b57f255cd922780.jpg",
        artist: "Annihilator",
        country: "Canada",
        countryURL: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg",
        year: 1989,
    },
];

function randomAlbum() {
    var randomNumber = Math.floor( Math.random() * (Array.length) );
    document.querySelector("#randomAlbumDisplay").textContent = Array[randomNumber].artist + " — " + Array[randomNumber].album;
    document.querySelector("#albumArtwork").src = Array[randomNumber].albumURL;
    document.querySelector("#flagArtwork").src = Array[randomNumber].countryURL;
};


/* RANDOM STUFF THAT DOESN'T WORK ------ TRYING STUFF
function checkYear(){
    var inputValue = document.querySelector("input").value;
    if(inputValue === Array[randomNumber].year){
        console.log("correct");
    } else {
        console.log("WRONG!!!");
    }
};

checkYear();

*/