//Try making the traffic light work - Think through the problem BEFORE you code!
// You'll use addEventListener and getElementById if you're doing it right...

// Reset function that turns all lights off
function turnOff(){
    document.querySelector("#stopLight").classList.remove("stop");
    document.querySelector("#slowLight").classList.remove("caution");
    document.querySelector("#goLight").classList.remove("go");
}


// Green
function go(){

    // Turn everything off
    turnOff();

    // Turn green on
    document.querySelector("#goLight").classList.add("go");

}
// Red
function stop(){
    // Turn everything off
    turnOff();

    // Turn red on
    document.querySelector("#stopLight").classList.add("stop");

}


// Yellow
function caution(){
    // Turn everything off
    turnOff();
    // Turn yellow on
    document.querySelector("#slowLight").classList.add("caution");
}



// Bind to red
document.getElementById('stopButton').addEventListener('click',stop);

// Bind to green
document.getElementById('goButton').addEventListener('click',go);

// Bind to yellow
document.getElementById('slowButton').addEventListener('click',caution);