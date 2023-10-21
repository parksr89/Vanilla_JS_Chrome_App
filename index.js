const mouseEvent = document.querySelector(".mouse-eventlistener");
const windowSize = document.querySelector(".color-by-windowsize");
const randomNumberGame = document.querySelector(".random-number-game");
const christmasEve = document.querySelector(".christmas-eve");
const giveMeColor = document.querySelector(".give-me-color");
const vanillaJsChromeApp = document.querySelector(".vanilla-js-chrome-app");

const imggif = document.querySelector("img");

function onMouseOver(event) {
  event.preventDefault();
  //console.dir(event.type);

  if (event.type === "mouseenter") {
    imggif.classList.remove(`hidden`);

    if (event.target.className === `mouse-eventlistener`) {
      imggif.src = `gif/1.gif`;
    }
    if (event.target.className === `color-by-windowsize`) {
      imggif.src = `gif/2.gif`;
    }
    if (event.target.className === `random-number-game`) {
      imggif.src = `gif/3.gif`;
    }
    if (event.target.className === `christmas-eve`) {
      imggif.src = `gif/4.gif`;
    }
    if (event.target.className === `give-me-color`) {
      imggif.src = `gif/5.gif`;
    }
    if (event.target.className === `vanilla-js-chrome-app`) {
      imggif.src = `gif/6.gif`;
    }
  } else {
    imggif.classList.add(`hidden`);
  }
}

mouseEvent.addEventListener("mouseenter", onMouseOver);
mouseEvent.addEventListener("mouseleave", onMouseOver);

windowSize.addEventListener("mouseenter", onMouseOver);
windowSize.addEventListener("mouseleave", onMouseOver);

randomNumberGame.addEventListener("mouseenter", onMouseOver);
randomNumberGame.addEventListener("mouseleave", onMouseOver);

christmasEve.addEventListener("mouseenter", onMouseOver);
christmasEve.addEventListener("mouseleave", onMouseOver);

giveMeColor.addEventListener("mouseenter", onMouseOver);
giveMeColor.addEventListener("mouseleave", onMouseOver);

vanillaJsChromeApp.addEventListener("mouseenter", onMouseOver);
vanillaJsChromeApp.addEventListener("mouseleave", onMouseOver);
