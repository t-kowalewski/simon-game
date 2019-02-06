// Game data
let userClickedPattern = [];
let gamePattern = [];
let buttonColors = ["red", "blue", "green", "yellow"];
let started = false;
let level = 0;

if (!started) {
    // $(document).on("keypress", nextSequence);

    $(document).on("keydown", function(event) {
        if (event.key === "a" || event.key === "A") {
            $("#level-title").text("Level " + level);
            nextSequence();
            started = true;
        }
    });
}


// User response / answer
$(".btn").click(function(event) {
    let userChosenColor = event.target.id;
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
})


// Function - Game Mechanics / Blink sequence
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


// Function - Check user answer
function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log("right");
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function () {
                nextSequence()
            }, 1000);
        }
    }
    // 
    else {
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        
        startOver();
        console.log("wrong");
    }
    console.log("user clicks", userClickedPattern);
    console.log("game clicks", gamePattern);
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