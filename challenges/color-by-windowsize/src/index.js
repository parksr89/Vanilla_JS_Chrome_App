const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
const background =document.getElementsByTagName("body")



function onresize(event){
        console.log(event.target);
    if(event.target.innerWidth > 1100 && event.target.innerWidths < 1300){
       background[0].style.backgroundColor=colors[0];        
    } else if(event.target.innerWidth > 900 && event.target.innerWidth < 1100){
        background[0].style.backgroundColor=colors[1];
    }else if(event.target.innerWidth > 750 && event.target.innerWidth < 900){
        background[0].style.backgroundColor=colors[2];
    }else if(event.target.innerWidth > 600 && event.target.innerWidth < 750){
        background[0].style.backgroundColor=colors[3];
    }else if(event.target.innerWidth > 450 && event.target.innerWidth < 600){
        background[0].style.backgroundColor=colors[4];
    }else{
        background[0].style.backgroundColor=""; 
    }

    
}
window.addEventListener("resize", onresize);