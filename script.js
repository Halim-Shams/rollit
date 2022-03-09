// Grabbed the needed ELEMENTS and ATTRIBUTES
var resultHeader = document.querySelector("h1")
var player1Score = document.querySelector(".player1Score")
var player2Score = document.querySelector(".player2Score")





// Random numbers for selecting a RANDOM IMAGE
var randomNumbers1 = Math.floor(Math.random() * 6) + 1
var randomNumbers2 = Math.floor(Math.random() * 6) + 1


// Showing the random IMAGE to the user/viewer
var randImage1 = document.querySelector(".playerOne img").setAttribute("src", `images/dice${randomNumbers1}.png`)
var randImage2 = document.querySelector(".playerTwo img").setAttribute("src", `images/dice${randomNumbers2}.png`)


// Players Scores
player1Score.innerHTML = randomNumbers1
player2Score.innerHTML = randomNumbers2


// Commads for button to refresh the page=
function refreshPage() {
    setTimeout(function() {
        window.location.reload()
    }, 400)
}


// Play the sound while pressing the button
function play() {
    var audio = document.querySelector("audio")
    audio.play()
}



// Printing the result to users/clients/viewers
if (randomNumbers1 > randomNumbers2) {
    resultHeader.innerHTML = "👇You Won!"
    resultHeader.style.color = "#fa20ce"
} else if (randomNumbers2 > randomNumbers1) {
    resultHeader.innerHTML = "Computer won!👇"
    resultHeader.style.color = "#04acfa"
} else if (randomNumbers1 == randomNumbers2) {
    resultHeader.innerHTML = "Draw!🙄"
}