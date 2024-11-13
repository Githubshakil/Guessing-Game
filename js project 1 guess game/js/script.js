let playeroneinput = document.querySelector(".playeroneinput")
let playeronebutton = document.querySelector(".playeronebutton")
let playertwoinput = document.querySelector(".playertwoinput")
let playertwobutton = document.querySelector(".playertwobutton")
let error = document.querySelector(".error")
let heading = document.querySelector(".heading")
let span = document.querySelector("span")
let chancesheading = document.querySelector("h3")
let img = document.querySelector("img")

let playeroneNumber;
let count = 5;

playeronebutton.addEventListener("click",function(){
    
if(playeroneinput.value == ""){
        error.style.color = "red"
        error.innerHTML = "please give a number"
    }else{
        if(Number(playeroneinput.value)){


            if(Number(playeroneinput.value) >=1  && Number(playeroneinput.value) <= 10){
            playeroneNumber = playeroneinput.value
            error.innerHTML = ""
            heading.innerHTML = "Player 2"
            chancesheading.style.display = "block"
            span.innerHTML = count
            displayControll("player2blockplayer1none")
            }else{
                 error.style.color = "red"
                error.innerHTML = "please give the number between 1 to 10"
            }
           
            
        }else{
            error.style.color = "red"
            error.innerHTML = "please give the number"
        }
    }
})


playertwobutton.addEventListener("click",function(){

    if(count > 0){
        

        if(playertwoinput.value == ""){
            error.style.color = "red"
            error.innerHTML = "please give a number"
        }else{
            if(Number(playertwoinput.value)){

                if(Number(playertwoinput.value) >=1  && Number(playertwoinput.value) <= 10){
                         count--
                span.innerHTML = count
                error.innerHTML = ""
               if(playeroneNumber == playertwoinput.value){
                    heading.innerHTML = "Player 2 Winner"
                    img.style.display = "block"
                    chancesheading.style.display = "none"
                    displayControll("all")
               }else if(count == 0){
                heading.innerHTML = "Player 1 Winner"
                img.style.display = "block"
                chancesheading.style.display = "none"
                displayControll("all")
                
               }
                }else{
                    error.style.color = "red"
                    error.innerHTML = "please give the number between 1 to 10"
                }
            
            }else{
                error.style.color = "red"
                error.innerHTML = "please give the number"
            }
        }
    }else {
        
            console.log("Game Over")
        
        }
    })





function displayControll(type){

    if(type=="player2blockplayer1none"){
        playertwoinput.style.display = "inline-block"
        playertwobutton.style.display = "inline-block"
        playeroneinput.style.display = "none"
        playeronebutton.style.display = "none"
    }else if(type=="player1blockplayer2none"){
        playertwoinput.style.display = "none"
        playertwobutton.style.display = "none"
        playeroneinput.style.display = "inline-block"
        playeronebutton.style.display = "inline-block"
    }else if(type=="player1block"){
        playeroneinput.style.display = "inline-block"
        playeronebutton.style.display = "inline-block"
    }else if(type=="player2block"){
        playertwoinput.style.display = "inline-block"
        playertwobutton.style.display = "inline-block"
    }else if(type=="player1none"){
        playeroneinput.style.display = "none"
        playeronebutton.style.display = "none"
    }else if(type=="player2none"){
        playertwoinput.style.display = "none"
        playertwobutton.style.display = "none"
    }else if(type == "all"){
        playertwoinput.style.display = "none"
        playertwobutton.style.display = "none"
        playeroneinput.style.display = "none"
        playeronebutton.style.display = "none"
    }

}