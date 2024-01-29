// creacion de variables
const video = document.querySelector("#video");
const play = document.querySelector("#play");
const pause = document.querySelector("#pause");
const backward = document.querySelector("#backward");
const forward = document.querySelector("#forward");
const progress = document.querySelector('#progress');

// manejos de fucniones
const handlePlay = () => {
    video.play();
    play.hidden = true;
    pause.hidden = false;
};

const handlePuase = () => {
    video.pause();
    pause.hidden = true;
    play.hidden = false;
};

const handleBackward = () => video.currentTime -= 10;
const handleForward = () => video.currentTime += 10;
const handleLoaded = () => progress.max = video.duration;
const handleTimeUpdate = () => progress.value = video.currentTime;
const handleInput = () => video.currentTime = progress.value;

// eventos
play.addEventListener("click", handlePlay);
pause.addEventListener("click", handlePuase);
backward.addEventListener("click", handleBackward);
forward.addEventListener("click", handleForward);
video.addEventListener("loadedmetadata", handleLoaded);
video.addEventListener("timeupdate", handleTimeUpdate);
progress.addEventListener("input", handleInput)