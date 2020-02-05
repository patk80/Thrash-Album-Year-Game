var Array = [
    {
        album: "Spreading the Disease",
        albumURL: "https://m.media-amazon.com/images/I/51gVyF2IA+L._SS500_SS500_.jpg",
        artist: "Anthrax",
        country: "New York City, USA",
        countryURL: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png",
        year: 1985,
    },
    {
        album: "Peace Sells... but Who's Buying?",
        albumURL: "https://images-na.ssl-images-amazon.com/images/I/61KgZqvSZxL.jpg",
        artist: "Megadeth",
        country: "Los Angeles, USA",
        countryURL: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png",
        year: 1986,
    },
    {
        album: "Kawaleria Szatana",
        albumURL: "https://m.media-amazon.com/images/I/71pC6CwEsmL._SS500_.jpg",
        artist: "Turbo",
        country: "Poznań, Poland",
        countryURL: "https://upload.wikimedia.org/wikipedia/en/1/12/Flag_of_Poland.svg",
        year: 1986,
    },
    {
        album: "Rising from the Sea",
        albumURL: "https://f4.bcbits.com/img/a1752593922_10.jpg",
        artist: "Exumer",
        country: "Wiesbaden, West Germany",
        countryURL: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1280px-Flag_of_Germany.svg.png",
        year: 1987,
    },
    {
        album: "Under the Influence",
        albumURL: "https://img.discogs.com/RFcagFIaDVKCh80ZxKnYgFXxLW4=/fit-in/600x601/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-5328126-1551294566-1616.jpeg.jpg",
        artist: "Overkill",
        country: "New Jersey, USA",
        countryURL: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png",
        year: 1988,
    },
    {
        album: "Alice in Hell",
        albumURL: "https://lastfm.freetls.fastly.net/i/u/500x500/ec6cf022a31ed93a1b57f255cd922780.jpg",
        artist: "Annihilator",
        country: "Ottawa, Ontario (Canada)",
        countryURL: "https://images-na.ssl-images-amazon.com/images/I/31udX7AlntL._AC_SX466_.jpg",
        year: 1989,
    },
    {
        album: "By Inheritance",
        albumURL: "https://img.discogs.com/l61uCwSUfmrvB3YQq7wCibYzOrU=/fit-in/600x585/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1716084-1441211510-6502.jpeg.jpg",
        artist: "Artillery",
        country: "Taastrup, Denmark",
        countryURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Flag_of_Denmark.svg/2000px-Flag_of_Denmark.svg.png",
        year: 1990,
    },
    {
        album: "For Whose Advantage?",
        albumURL: "https://images-na.ssl-images-amazon.com/images/I/A1ctCYKeTyL._SL1500_.jpg",
        artist: "Xentrix",
        country: "Preston, Lancashire (England)",
        countryURL: "https://upload.wikimedia.org/wikipedia/en/thumb/b/be/Flag_of_England.svg/1280px-Flag_of_England.svg.png",
        year: 1990,
    }
];

function randomAlbum() {
    var randomIndex = Math.floor( Math.random() * (Array.length) );
    var albumYear   = Array[randomIndex].year;
    document.querySelector("#countryTextContent").textContent = Array[randomIndex].country;
    document.querySelector("#albumTextContent").textContent   = Array[randomIndex].artist + " — " + Array[randomIndex].album;
    document.querySelector("#albumArtwork").src               = Array[randomIndex].albumURL;
    document.querySelector("#flagArtwork").src                = Array[randomIndex].countryURL;

    // need to reset albumYear value after each cycle through - keeps comparing to first albumYear variable //
    var submitButton = document.querySelector("#submitButton");
    submitButton.addEventListener("click", function(){
        var inputValue = document.querySelector("input").value;
        console.log("Input value: " + inputValue); //troubleshooting //
        console.log("Album year: " + albumYear);   //troubleshooting //

        if(inputValue == albumYear){
            console.log("Correct guess!!!");
        } else {
            console.log("WRONG guess");
        }

    });
    // need to reset albumYear value after each cycle through - keeps comparing to first albumYear variable //


};

// https://stackoverflow.com/questions/11295142/reset-javascript-function //

// https://www.codecademy.com/forum_questions/55f8bf5386f5529536000458?locale=en //
