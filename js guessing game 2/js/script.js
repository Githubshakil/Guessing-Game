let playeroneinput = document.querySelector(".playeroneinput")
let playeronebutton = document.querySelector(".playeronebutton")
let playertwoinput = document.querySelector(".playertwoinput")
let playertwobutton = document.querySelector(".playertwobutton")
let playerthreeinput = document.querySelector(".playerthreeinput")
let playerthreebutton = document.querySelector(".playerthreebutton")
let playerfourinput = document.querySelector(".playerfourinput")
let playerfourbutton = document.querySelector(".playerfourbutton")
let heading = document.querySelector(".heading")
let error = document.querySelector(".error")
let span = document.querySelector("span")
let anotherheading = document.querySelector("h2")
let img = document.querySelector("img")

let playeronenumber;
let count = 5


let p2;
let p3;
let p4;




playeronebutton.addEventListener("click", function () {

    if (playeroneinput.value == "") {
        error.style.color = "red"
        error.innerHTML = "Please give a number"
    } else {
        if (Number(playeroneinput.value)) {
            if (Number(playeroneinput.value) >= 1 && Number(playeroneinput.value) <= 10) {
                playeronenumber = playeroneinput.value
                error.innerHTML = ""
                heading.innerHTML = "Player-2"
                anotherheading.style.display = "block"
                span.innerHTML = count
                displayControl("p2bp1n")
            } else {
                error.style.color = "red"
                error.innerHTML = "Please give a number between 1 to 10"
            }
        } else {
            error.style.color = "red"
            error.innerHTML = "Please give a number"
        }
    }


})


playertwobutton.addEventListener("click", function () {


    if (count > 0) {

        if (playertwoinput.value == "") {
            error.style.color = "red"
            error.innerHTML = "Please give a number"
        } else {
            if (Number(playertwoinput.value)) {
                if (Number(playertwoinput.value) >= 1 && Number(playertwoinput.value) <= 10) {
                    error.innerHTML = ""
                    count--
                    span.innerHTML = count

                    if (playeronenumber == playertwoinput.value) {
                        p2 = "player 1 VS 2 = Player-2 winner"


                        heading.innerHTML = "player-3"
                        count = 5
                        anotherheading.style.display = "inline-block"
                        span.innerHTML = count
                        displayControl("p3bp2np1n")

                    } else if (count == 0) {
                        p2 = "player 1 VS 2 = Player-1 winner"

                        heading.innerHTML = "player-3"
                        count = 5
                        anotherheading.style.display = "inline-bloc"
                        span.innerHTML = count
                        displayControl("p3bp2np1n")


                    }

                } else {
                    error.style.color = "red"
                    error.innerHTML = "Please give a number 1 to 10"
                }
            } else {
                error.style.color = "red"
                error.innerHTML = "Please give a number"
            }

        }
    }

})


playerthreebutton.addEventListener("click", function () {


    if (count > 0) {

        if (playerthreeinput.value == "") {
            error.style.color = "red"
            error.innerHTML = "Please give a number"
        } else {
            if (Number(playerthreeinput.value)) {
                if (Number(playerthreeinput.value) >= 1 && Number(playerthreeinput.value) <= 10) {
                    error.innerHTML = ""
                    count--
                    span.innerHTML = count

                    if (playeronenumber == playerthreeinput.value) {
                        p3 = "player 1 VS 3 = Player-3 winner"


                        heading.innerHTML = "player-4"
                        count = 5
                        anotherheading.style.display = "inline-block"
                        span.innerHTML = count
                        displayControl("p4bp3np2np1n")

                    } else if (count == 0) {
                        p3 = "player 1 VS 3 = Player-1 winner"

                        heading.innerHTML = "player-4"
                        count = 5
                        anotherheading.style.display = "inline-bloc"
                        span.innerHTML = count
                        displayControl("p4bp3np2np1n")


                    }

                } else {
                    error.style.color = "red"
                    error.innerHTML = "Please give a number 1 to 10"
                }
            } else {
                error.style.color = "red"
                error.innerHTML = "Please give a number"
            }

        }
    }

})


playerfourbutton.addEventListener("click", function () {


    if (count > 0) {

        if (playerfourinput.value == "") {
            error.style.color = "red"
            error.innerHTML = "Please give a number"
        } else {
            if (Number(playerfourinput.value)) {
                if (Number(playerfourinput.value) >= 1 && Number(playerfourinput.value) <= 10) {
                    error.innerHTML = ""
                    count--
                    span.innerHTML = count

                    if (playeronenumber == playerfourinput.value) {
                        p4 = "player 1 VS 4 = Player-4 winner"


                        heading.innerHTML = "Result"
                        count = 5
                        img.style.display = "block"
                        
                        
                        span.innerHTML = count
                        anotherheading.innerHTML = `
                        1. ${p2}</br>
                        2. ${p3}</br>
                        3. ${p4}</br>
                        `
                        displayControl("all")

                    } else if (count == 0) {
                        p4 = "player 1 VS 4 = Player-1 winner"

                        heading.innerHTML = "Result"
                        count = 5
                        img.style.display = "block"
                        // anotherheading.style.display = "none"

                        span.innerHTML = count
                        anotherheading.innerHTML = `
                        1. ${p2} </br>
                        2. ${p3} </br>
                        3. ${p4} </br>
                        `
                        displayControl("all")


                    }

                } else {
                    error.style.color = "red"
                    error.innerHTML = "Please give a number 1 to 10"
                }
            } else {
                error.style.color = "red"
                error.innerHTML = "Please give a number"
            }

        }
    }

})







function displayControl(type) {
    if (type == "p2bp1n") {
        playertwoinput.style.display = "inline-block"
        playertwobutton.style.display = "inline-block"
        playeroneinput.style.display = "none"
        playeronebutton.style.display = "none"

    } else if (type == "p1bp2n") {
        playertwoinput.style.display = "none"
        playertwobutton.style.display = "none"
        playeroneinput.style.display = "inline-block"
        playeronebutton.style.display = "inline-block"
    } else if (type == "p3bp2np1n") {
        playerthreeinput.style.display = "inline-block"
        playerthreebutton.style.display = "inline-block"
        playertwoinput.style.display = "none"
        playertwobutton.style.display = "none"
        playeroneinput.style.display = "none"
        playeronebutton.style.display = "none"
    } else if (type == "p4bp3np2np1n") {
        playerfourinput.style.display = "inline-block"
        playerfourbutton.style.display = "inline-block"
        playerthreeinput.style.display = "none"
        playerthreebutton.style.display = "none"
        playertwoinput.style.display = "none"
        playertwobutton.style.display = "none"
        playeroneinput.style.display = "none"
        playeronebutton.style.display = "none"
    }
    else if (type == "all") {

        playertwoinput.style.display = "inline-block"
        playertwobutton.style.display = "inline-block"
        playerthreeinput.style.display = "inline-block"
        playerthreebutton.style.display = "inline-block"
        playerfourinput.style.display = "inline-block"
        playerfourbutton.style.display = "inline-block"
        playeroneinput.style.display = "inline-block"
        playeronebutton.style.display = "inline-block"
        playeroneinput.style.display = "none"
        playeronebutton.style.display = "none"
        playertwoinput.style.display = "none"
        playertwobutton.style.display = "none"
        playerthreeinput.style.display = "none"
        playerthreebutton.style.display = "none"
        playerfourinput.style.display = "none"
        playerfourbutton.style.display = "none"
    }
}