let player;
let root;
let loopCount = 0;
root = document.getElementById("root");
root.style.backgroundColor = "green";
root.style.width ="100vw";
root.style.height ="100vh";


player = document.getElementById("player");
player.style.backgroundColor = "brown";
player.style.width = "50px";
player.style.height = "50px";
player.style.position = "absolute";

let dialog = document.getElementById("dialog");
dialog.innerText ="hello";

const marginIntegers = {
    left: 0,
    top: 0

}

const playerSpeed = 10;

console.warn(player);

const gameLoop = () => {
    // console.warn("loops: " + loopCount);
    loopCount = loopCount + 1;


    const width  = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const height = window.innerHeight|| document.documentElement.clientHeight|| document.body.clientHeight;

    console.log(width, height);

    dialog.innerText = "Screen Size is: " + width + " x " + height + ".";

}

setInterval(gameLoop, 500);


const myFunc = (evt) => {
    console.warn("hello ", player.style.marginLeft);

    if (evt.code === "Enter") {
        openFullscreen();
    } else if (evt.code === "ArrowUp") {
        if (marginIntegers.top > playerSpeed) {
            marginIntegers.top = marginIntegers.top - playerSpeed;
        } else {
            marginIntegers.top = 0;
        }
        evt.preventDefault();
    } else if (evt.code === "ArrowDown") {
        marginIntegers.top = marginIntegers.top + playerSpeed;
        evt.preventDefault();
    } else if (evt.code === "ArrowLeft") {
        if (marginIntegers.left > playerSpeed) {
            marginIntegers.left = marginIntegers.left - playerSpeed;
        } else {
            marginIntegers.left = 0;
        }
        evt.preventDefault();
    } else if (evt.code === "ArrowRight") {
        marginIntegers.left = marginIntegers.left + playerSpeed;
        evt.preventDefault();

    }

    player.style.marginTop = marginIntegers.top + "px";
    player.style.marginLeft = marginIntegers.left + "px";
}

document.addEventListener("keydown", myFunc);
const elem = document.documentElement;
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

