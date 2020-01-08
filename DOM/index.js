var title = document.querySelector("#headerId");
var colors = ["red", "green", "pink", "cyan","yellow"];
var count = 0;

var clearAnimation = setInterval(changeColor, 1000); //using setInterval,no need to use loop inside function

//remove interval at onclick
title.onclick = function(){
    
    clearInterval(clearAnimation);

}


function changeColor() {
    title.style.background = colors[count];
    count++;

    if(count >= colors.length){
        count =0;
    }
}
