const images =["0.gif", "1.gif", "2.gif"];

const chosenIamge = images[Math.floor(Math.random() * images.length)];

const bgIamge = document.createElement("img");


bgIamge.src =`gif/${chosenIamge}`;

document.body.appendChild(bgIamge);

