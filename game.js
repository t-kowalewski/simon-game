// Game data
let userClickedPattern = [];
let gamePattern = [];
let buttonColors = ["red", "blue", "green", "yellow"];
let started = false;
let level = 0;

// Start check
$(document).on("keydown", function() {
    if (!started) {
        nextSequence();
        started = true;
    }
});


// Function - Game Mechanics / Blink sequence - Each Level
function nextSequence() {
    userClickedPattern = [];

    // Increase level
    level++;
    $("#level-title").text("Level " + level);

    // Generate random number
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);

    // Random button blink
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100);

    // Play random button sound
    playSound(randomChosenColor);
}

// User response / answer
$(".btn").click(function(event) {
    let userChosenColor = event.target.id;
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
});


// Function - Check user answer - Check pattern
function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence()
            }, 1000);
        }
    }

    else {
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        
        startOver();
    }
    // console.log("game arr", gamePattern);
    // console.log("user clicks", userClickedPattern);
}


// ===== Additional functions =====

// Play button/wrong sound
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

// Start over
function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}