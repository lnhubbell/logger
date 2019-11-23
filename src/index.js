var player;
var root;
var loopCount = 0;
root = document.getElementById("root");
root.style.backgroundColor = "green";
root.style.width = "100vw";
root.style.height = "100vh";
player = document.getElementById("player");
player.style.backgroundColor = "brown";
player.style.width = "50px";
player.style.height = "50px";
player.style.position = "absolute";
var dialog = document.getElementById("dialog");
dialog.innerText = "hello";
var marginIntegers = {
    left: 0,
    top: 0
};
var playerSpeed = 10;
console.warn(player);
var gameLoop = function () {
    // console.warn("loops: " + loopCount);
    loopCount = loopCount + 1;
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    console.log(width, height);
    dialog.innerText = "Screen Size is: " + width + " x " + height + ".";
};
setInterval(gameLoop, 500);
var myFunc = function (evt) {
    console.warn("hello ", player.style.marginLeft);
    if (evt.code === "Enter") {
        openFullscreen();
    }
    else if (evt.code === "ArrowUp") {
        if (marginIntegers.top > playerSpeed) {
            marginIntegers.top = marginIntegers.top - playerSpeed;
        }
        else {
            marginIntegers.top = 0;
        }
        evt.preventDefault();
    }
    else if (evt.code === "ArrowDown") {
        marginIntegers.top = marginIntegers.top + playerSpeed;
        evt.preventDefault();
    }
    else if (evt.code === "ArrowLeft") {
        if (marginIntegers.left > playerSpeed) {
            marginIntegers.left = marginIntegers.left - playerSpeed;
        }
        else {
            marginIntegers.left = 0;
        }
        evt.preventDefault();
    }
    else if (evt.code === "ArrowRight") {
        marginIntegers.left = marginIntegers.left + playerSpeed;
        evt.preventDefault();
    }
    player.style.marginTop = marginIntegers.top + "px";
    player.style.marginLeft = marginIntegers.left + "px";
};
document.addEventListener("keydown", myFunc);
var elem = document.documentElement;
function openFullscreen() {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    }
    // else if (elem.mozRequestFullScreen) { /* Firefox */
    //   elem.mozRequestFullScreen();
    // } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    //   elem.webkitRequestFullscreen();
    // } else if (elem.msRequestFullscreen) { /* IE/Edge */
    //   elem.msRequestFullscreen();
    // }
}
