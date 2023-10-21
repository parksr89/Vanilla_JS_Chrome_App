const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];


const colorBtn = document.querySelector("button");
const backGround = document.querySelector("body");


function onClickBackgroundChange(event){

    // backGround.style.backgroundColor = `${colors[Math.floor(Math.random()*colors.length)]}`;

    const RandomTurn = (Math.ceil(Math.random()*100))*0.01;


    let colorOne = colors[Math.floor(Math.random()*colors.length)]; 
    let colorTwo = colors[Math.floor(Math.random()*colors.length)];
   

    while (colorOne === colorTwo) {
        colorTwo = colors[Math.floor(Math.random()*colors.length)];
    }

    let first = Math.floor(Math.random()*100); 
    let second = Math.floor(Math.random()*100);

    while (first === second) {
        second = Math.floor(Math.random()*100);
    }    

    backGround.style.background=`linear-gradient(${RandomTurn}turn, ${colorOne} ${first}%, ${colorTwo} ${second}%)`;

}

colorBtn.addEventListener("click", onClickBackgroundChange); 
