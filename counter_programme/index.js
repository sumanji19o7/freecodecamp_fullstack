//variable
let count=0;
let counter=document.getElementById("counter");
let saves=document.getElementById("previous");
console.log(saves);





function increment(){
    count++;
    counter.textContent=count;
}

function decrement(){
    count--;
    counter.textContent=count;
}

function save(){
    let countstr = count + " - ";
    saves.textContent += countstr;
    count=0;
    counter.textContent=count;

}