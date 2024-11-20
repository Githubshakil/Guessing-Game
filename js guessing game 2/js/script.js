let playeroneinput = document.querySelector(".playeroneinput")
let playeronebutton = document.querySelector(".playeronebutton")
let playertwoinput = document.querySelector(".playertwoinput")
let playertwobutton = document.querySelector(".playertwobutton")
let heading = document.querySelector(".heading")
let error = document.querySelector(".error")


let playeronenumber;




playeronebutton.addEventListener("click", function () {

    if (playeroneinput.value == "") {
        error.style.color = "red"
        error.innerHTML = "Please give a number"
    } else {
        if (Number(playeroneinput.value)) {
            error.innerHTML = ""
            heading.innerHTML = "Player-2"
            displayControl("p2bp1n")

        } else {
            error.style.color = "red"
            error.innerHTML = "Please give a number"
        }
    }


})


playertwobutton.addEventListener("click", function () {
    if (playertwoinput.value == "") {
        error.style.color = "red"
        error.innerHTML = "Please give a number"
    } else {
        if (Number(playertwoinput.value)) {
            error.innerHTML = ""


        } else {
            error.style.color = "red"
            error.innerHTML = "Please give a number"
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
    }

}