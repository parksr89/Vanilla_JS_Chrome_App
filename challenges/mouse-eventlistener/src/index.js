const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
const title = document.getElementsByTagName("h2");

const superEventHandler = function (event) {
  if (event.type === "mouseenter") {
    title[0].innerText = "The mouse is here!!";
    title[0].style.color = colors[Math.floor(Math.random() * colors.length)];
  } else if (event.type === "mouseleave") {
    title[0].innerText = "The mouse is gone!!!";
    title[0].style.color = colors[Math.floor(Math.random() * colors.length)];
  } else if (event.type === "resize") {
    title[0].innerText = "you just resized";
    title[0].style.color = colors[Math.floor(Math.random() * colors.length)];
  } else if (event.type === "contextmenu") {
    title[0].innerText = "That was right click";
    title[0].style.color = colors[Math.floor(Math.random() * colors.length)];
  }
};

title[0].addEventListener("mouseenter", superEventHandler);
title[0].addEventListener("mouseleave", superEventHandler);
window.addEventListener("resize", superEventHandler);
window.addEventListener("contextmenu", superEventHandler);
