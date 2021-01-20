// Detect button press
for (const button of document.querySelectorAll(".drum")) {
    button.addEventListener("click", function () {

        let buttonInnerHTML = this.innerHTML;
        playDrumSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    })
}


// Detect keyboard key press
document.addEventListener("keypress", function (event) {
    playDrumSound(event.key);
    buttonAnimation(event.key);
})


function playDrumSound(key) {
    switch (key) {
        case "w":
            let audioCrash = new Audio("sounds/crash.mp3");
            audioCrash.play();
            break;

        case "a":
            let audioTom1 = new Audio("sounds/tom-1.mp3");
            audioTom1.play();
            break;

        case "s":
            let audioTom2 = new Audio("sounds/tom-2.mp3");
            audioTom2.play();
            break;

        case "d":
            let audioTom3 = new Audio("sounds/tom-3.mp3");
            audioTom3.play();
            break;

        case "j":
            let audioTom4 = new Audio("sounds/tom-4.mp3");
            audioTom4.play();
            break;

        case "k":
            let audioKick = new Audio("sounds/kick-bass.mp3");
            audioKick.play();
            break;

        case "l":
            let audioSnare = new Audio("sounds/snare.mp3");
            audioSnare.play();
            break;

        default:
            console.log("non-programmed key");
    }
}

function buttonAnimation(key) {
    let activeButton = document.querySelector(`.${key}`);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}