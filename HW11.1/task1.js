const print = function(text){console.log(text);}

function printWithTimer(text,time){
    setTimeout(print, time, text);
}

printWithTimer("And I am ...", 4000);
printWithTimer("Iron Man", 4800);
printWithTimer("I am inevitable", 3200);