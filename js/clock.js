const date2 =document.querySelector("h2#date");
const clock =document.querySelector("h2#clock");


//----------date

function getDates (){
    const date =new Date();
    date2.innerText = `${date.toDateString()}`;
}

function getClock(){

    const date = new Date();
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    
    let ampm;
    
    if (hours >= 12) { // PM AM System
        ampm = 'PM';
    } else {
        ampm = 'AM';
    }

    hours = hours % 12;      // Convert hour from 24-hour to 12-hour format
    
    if (hours === 0) {       // If hour is 0 (midnight), set it to 12
        hours = 12;
    }

    hours = String(hours).padStart(2, "0"); // Pad hours with leading zeros if needed

    clock.innerText = `${hours}:${minutes}:${seconds} ${ampm}`;
}

getClock ()
getDates ()

setInterval(getClock, 1000);
setInterval(getDates, 1000);