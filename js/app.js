const textel = document.getElementById('text');
const text = "I\'m Web Developer";

let idx = 1;
let speed = 500;

function autotext(){
    textel.textContent = text.slice(0,idx);

    idx++;

    if(idx > text.length){
        idx = 1;
    }
    setTimeout(autotext,speed);
}

autotext();