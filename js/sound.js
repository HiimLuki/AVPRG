//Webaudio
let context = new AudioContext();
let drumpads = document.getElementsByClassName("drumpad");
let sounds = [];

for (let i=0; i< drumpads.length; i++){
    getData(i);
    drumpads[i].addEventListener("mousedown", function(){

    });
}
function getData(i){
    let sound = new Audio("../Audio/sound/sound" + (i+1) + ".wav");
    sounds.push(sound);
}
function playSound(){
    let soundNode = context.createMediaElementSource(sound);
    soundNode.connect(context.destination);
    sound.play();
}
