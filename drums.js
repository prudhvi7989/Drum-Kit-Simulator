document.querySelector(".w").addEventListener("click", clicktoms);
document.querySelector(".a").addEventListener("click", clicktom2);
document.querySelector(".s").addEventListener("click", clicktom3);
document.querySelector(".d").addEventListener("click", clicktom4);
document.querySelector(".l").addEventListener("click", clickbass);
document.querySelector(".k").addEventListener("click", clickcrash);
document.querySelector(".j").addEventListener("click", clicksnare);
document.addEventListener("keypress", function (event) {
    if (event.key === 'w' || event.key === 'W') {
        clicktoms();
    }
    else if (event.key === 'a' || event.key === 'A') {
        clicktom2();
    }
    else if (event.key === 's' || event.key === 'S') {
        clicktom3();
    }
    else if (event.key === 'd' || event.key === 'D') {
        clicktom4();
    }
    else if (event.key === 'l' || event.key === 'L') {
        clickbass();
    }
    else if (event.key === 'k' || event.key === 'K') {
        clickcrash();
    }
    else if (event.key === 'j' || event.key === 'L') {
        clicksnare();
    }
});
function clicktoms() {
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();
}
function clicktom2() {
    var audio = new Audio('sounds/tom-2.mp3');
    audio.play();
}
function clicktom3() {
    var audio = new Audio('sounds/tom-3.mp3');
    audio.play();
}
function clicktom4() {
    var audio = new Audio('sounds/tom-4.mp3');
    audio.play();
}
function clickbass() {
    var audio = new Audio('sounds/kick-bass.mp3');
    audio.play();
}
function clickcrash() {
    var audio = new Audio('sounds/crash.mp3');
    audio.play();
}
function clicksnare() {
    var audio = new Audio('sounds/snare.mp3');
    audio.play();
}