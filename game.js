let = userClickedPattern = [];
let gamePattern = [];

let buttonColors = ["red", "blue", "green", "yellow"];

let randomChosenColor = buttonColors[nextSequence()];

gamePattern.push(randomChosenColor);

$("#" + randomChosenColor).fadeOut(100).fadeIn(100);

// Play Button Sound
let buttonSound = new Audio("sounds/" + randomChosenColor + ".mp3");
buttonSound.play();


// $(".btn").click(function(event) {
//     let userChosenColor = event.id;
// })


// Function - generate random number
function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4);
    return randomNumber;
}