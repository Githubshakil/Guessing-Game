



let playeroneinput = document.querySelector(".playeroneinput");
let playeronebutton = document.querySelector(".playeronebutton");
let playertwoinput = document.querySelector(".playertwoinput");
let playertwobutton = document.querySelector(".playertwobutton");
let playerthreeinput = document.querySelector(".playerthreeinput");
let playerthreebutton = document.querySelector(".playerthreebutton");
let playerfourinput = document.querySelector(".playerfourinput");
let playerfourbutton = document.querySelector(".playerfourbutton");

let error = document.querySelector(".error");
let heading = document.querySelector(".heading");
let span = document.querySelector("span");
let chancesheading = document.querySelector("h3");
let img = document.querySelector("img");

let playeroneNumber;
let count = 1;

playeronebutton.addEventListener("click", function() {
    if (playeroneinput.value === "") {
        error.style.color = "red";
        error.innerHTML = "Please give a number";
    } else {
        if (Number(playeroneinput.value)) {
            if (Number(playeroneinput.value) >= 1 && Number(playeroneinput.value) <= 10) {
                playeroneNumber = playeroneinput.value;
                error.innerHTML = "";
                heading.innerHTML = "Player 2";
                chancesheading.style.display = "block";
                span.innerHTML = count;
                displayControll("player2blockplayer1none");
            } else {
                error.style.color = "red";
                error.innerHTML = "Please give a number between 1 and 10";
            }
        } else {
            error.style.color = "red";
            error.innerHTML = "Please give a number";
        }
    }
});

// Player 2
playertwobutton.addEventListener("click", function() {
    if (count > 0) {
        if (playertwoinput.value == "") {
            error.style.color = "red";
            error.innerHTML = "Please give a number";
        } else {
            if (Number(playertwoinput.value)) {
                if (Number(playertwoinput.value) >= 1 && Number(playertwoinput.value) <= 10) {
                    count--;
                    span.innerHTML = count;
                    error.innerHTML = "";
                    if (playeroneNumber == playertwoinput.value) {
                        heading.innerHTML = "Player 2 Winner";
                        img.style.display = "block";
                        chancesheading.style.display = "none";
                        // displayControll("all");
                        
                    } else if (count == 0) {
                        heading.innerHTML = "Player 3";
                        count = 1; // Reset count for the next player
                        displayControll("player3blockplayer2none");
                    }
                } else {
                    error.style.color = "red";
                    error.innerHTML = "Please give a number between 1 and 10";
                }
            } else {
                error.style.color = "red";
                error.innerHTML = "Please give a number";
            }
        }
    } else {
        
    }
});

// Player 3
playerthreebutton.addEventListener("click", function() {
    if (count > 0) {
        if (playerthreeinput.value == "") {
            error.style.color = "red";
            error.innerHTML = "Please give a number";
        } else {
            if (Number(playerthreeinput.value)) {
                if (Number(playerthreeinput.value) >= 1 && Number(playerthreeinput.value) <= 10) {
                    count--;
                    span.innerHTML = count;
                    error.innerHTML = "";
                    if (playeroneNumber == playerthreeinput.value) {
                        heading.innerHTML = "Player 3 Winner";
                        img.style.display = "block";
                        chancesheading.style.display = "none";
                        // displayControll("all");
                    } else if (count == 0) {
                        heading.innerHTML = "Player 4";
                        count = 1; // Reset count for the next player
                        displayControll("player4blockplayer3none");
                    }
                } else {
                    error.style.color = "red";
                    error.innerHTML = "Please give a number between 1 and 10";
                }
            } else {
                error.style.color = "red";
                error.innerHTML = "Please give a number";
            }
        }
    } else {
        
    }
});

// Player 4
playerfourbutton.addEventListener("click", function() {
    if (count > 0) {
        if (playerfourinput.value == "") {
            error.style.color = "red";
            error.innerHTML = "Please give a number";
        } else {
            if (Number(playerfourinput.value)) {
                if (Number(playerfourinput.value) >= 1 && Number(playerfourinput.value) <= 10) {
                    count--;
                    span.innerHTML = count;
                    error.innerHTML = "";
                    if (playeroneNumber == playerfourinput.value) {
                        heading.innerHTML = "Player 4 Winner";
                        img.style.display = "block";
                        chancesheading.style.display = "none";
                        // displayControll("all");
                    } else if (count == 0) {
                        heading.innerHTML = "Player 1 Winner";
                        img.style.display = "block";
                        chancesheading.style.display = "none";
                        // displayControll("all");
                        
                    }
                } else {
                    error.style.color = "red";
                    error.innerHTML = "Please give a number between 1 and 10";
                }
            } else {
                error.style.color = "red";
                error.innerHTML = "Please give a number";
            }
        }
    } else {
        
    }
});

function displayControll(type) {
    if (type == "player2blockplayer1none") {
        playertwoinput.style.display = "inline-block";
        playertwobutton.style.display = "inline-block";
        playeroneinput.style.display = "none";
        playeronebutton.style.display = "none";
    } else if (type == "player3blockplayer2none") {
        playerthreeinput.style.display = "inline-block";
        playerthreebutton.style.display = "inline-block";
        playertwoinput.style.display = "none";
        playertwobutton.style.display = "none";
    } else if (type == "player4blockplayer3none") {
        playerfourinput.style.display = "inline-block";
        playerfourbutton.style.display = "inline-block";
        playerthreeinput.style.display = "none";
        playerthreebutton.style.display = "none";
    } else if (type == "player3blockplayer4none") {
        playerfourinput.style.display = "none";
        playerfourbutton.style.display = "none";
        playerthreeinput.style.display = "inline-block";
        playerthreebutton.style.display = "inline-block";
    } else if (type == "player2blockplayer3none") {
        playerthreeinput.style.display = "none";
        playerthreebutton.style.display = "none";
        playertwoinput.style.display = "inline-block";
        playertwobutton.style.display = "inline-block";
    } else if (type == "player1blockplayer2none") {
        playertwoinput.style.display = "none";
        playertwobutton.style.display = "none";
        playeroneinput.style.display = "inline-block";
        playeronebutton.style.display = "inline-block";
    } else if (type == "player1block") {
        playeroneinput.style.display = "inline-block";
        playeronebutton.style.display = "inline-block";
    } else if (type == "player2block") {
        playertwoinput.style.display = "inline-block";
        playertwobutton.style.display = "inline-block";
    } else if (type == "player1none") {
        playeroneinput.style.display = "none";
        playeronebutton.style.display = "none";
    } else if (type == "player2none") {
        playertwoinput.style.display = "none";
        playertwobutton.style.display = "none";
    }else if (type == "player3block") {
        playerthreeinput.style.display = "inline-block";
        playerthreebutton.style.display = "inline-block";
    }else if (type == "player3none") {
        playerthreeinput.style.display = "none";
        playerthreebutton.style.display = "none";
    }else if (type == "player4block") {
        playerfourinput.style.display = "inline-block";
        playerfourbutton.style.display = "inline-block";
    }else if (type == "player4none") {
        playerfourinput.style.display = "none";
        playerfourbutton.style.display = "none";
    }
    }


















