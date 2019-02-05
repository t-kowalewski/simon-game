// Game data
let userClickedPattern = [];
let gamePattern = [];
let buttonColors = ["red", "blue", "green", "yellow"];

// User response / answer
$(".btn").click(function(event) {
    let userChosenColor = event.target.id;
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);
})


// Function - Blink sequence / Game Mechanics
function nextSequence() {
    // Generate random number
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    // Random button blink
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100);

    // Play random button sound
    playSound(randomChosenColor);
}

// ===== Additional functions =====

// Play button sound
function playSound(name) {
    let buttonSound = new Audio("sounds/" + name + ".mp3");
    buttonSound.play();
}

// Button animation - "pressed" css class
function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}