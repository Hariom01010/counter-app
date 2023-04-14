let counter = 0;

function increment(){
    counter=counter+1;
    document.getElementById("myCounter").innerText=counter;
}

function decrement(){
    counter=counter-1;
    document.getElementById("myCounter").innerText=counter;
}

function reset(){
    counter=0;
    document.getElementById("myCounter").innerText=counter;
}