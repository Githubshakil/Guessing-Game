let playeroneinput = document.querySelector(".playeroneinput")
let playeronebutton = document.querySelector(".playeronebutton")
let playertwoinput = document.querySelector(".playertwoinput")
let playertwobutton = document.querySelector(".playertwobutton")
let heading = document.querySelector(".heading")
let error = document.querySelector(".error")
let span = document.querySelector("span")
let anotherheading = document.querySelector("h2")
let img = document.querySelector("img")

let playeronenumber;
let count = 5




playeronebutton.addEventListener("click", function () {

    if (playeroneinput.value == "") {
        error.style.color = "red"
        error.innerHTML = "Please give a number"
    } else {
        if (Number(playeroneinput.value)) {
            if(Number(playeroneinput.value) >=1 && Number(playeroneinput.value) <=10){
                playeronenumber = playeroneinput.value
                error.innerHTML = ""
                 heading.innerHTML = "Player-2"
                anotherheading.style.display="block"
                span.innerHTML = count
                displayControl("p2bp1n")
            }else{
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


    if(count>0){
        
        if (playertwoinput.value == "") {
            error.style.color = "red"
            error.innerHTML = "Please give a number"
        } else {
            if (Number(playertwoinput.value)) {
                error.innerHTML = ""
                count--
                span.innerHTML = count
               
                if(playeronenumber == playertwoinput.value){
                    heading.innerHTML="player-2 winner"
                    img.style.display="block"
                    anotherheading.style.display="none"
                    displayControl("all")
                    
                }else if(count==0){
                    heading.innerHTML="player-1 winner"
                     img.style.display="block"
                     anotherheading.style.display="none"
                    displayControl("all")
                    
                    
                }
                
            }else{
                error.style.color = "red"
                error.innerHTML = "Please give a number"
            }
        }
    }else{
      
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
    }else if(type=="all"){
        playertwoinput.style.display = "inline-block"
        playertwobutton.style.display = "inline-block"
        playeroneinput.style.display = "inline-block"
        playeronebutton.style.display = "inline-block"
        playeroneinput.style.display = "none"
        playeronebutton.style.display = "none"
        playertwoinput.style.display = "none"
        playertwobutton.style.display = "none"
    }
}