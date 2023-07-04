const TypingText = document.querySelector(".TypeText");
const AutoText = document.querySelector(".TypeCursor");

const textArray = ["Create.","Design.","Creative.","Thinking.","Geoo.","Wonder Sketches.","Sketch in Dreams.","Build Your Future.","A Site to Die For.","Create My Site.","Creative Sites.","A Digital Future.","Develop My Plots.","Page Perfect.","My Pattern Studio."];

const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;


document.addEventListener("DOMContentLoaded", function(){
    setTimeout(type, newTextDelay + 250);
});

function type (){
if(charIndex < textArray[textArrayIndex].length){
    TypingText.innerHTML += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
}else{
    setTimeout(erase, newTextDelay);
}
}

function erase(){
    if(charIndex > 0){
        TypingText.innerHTML = textArray[textArrayIndex].substring(0, charIndex -1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else{
        textArrayIndex++;
        if(textArrayIndex >=textArray.length) textArrayIndex =0;
        setTimeout(type, typingDelay + 1100);
    }
}
