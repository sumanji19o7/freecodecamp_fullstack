let homescore= document.getElementById("homescore");
let awayscore = document.getElementById("awayscore");
let hscore=0;
let ascore=0;




function increaseonehome(){
    hscore += 1;    
    homescore.textContent=hscore;
}

function increasetwohome(){
    hscore += 2;
    homescore.textContent=hscore;
}

function inceasethreehome(){
    hscore += 3;
    homescore.textContent=hscore;
}

function increaseoneaway(){
    ascore += 1;    
    awayscore.textContent=ascore;
}

function increasetwoaway(){
    ascore += 2;
    awayscore.textContent=ascore;
}

function inceasethreeaway(){
    ascore += 3;
    awayscore.textContent=ascore;
}

function resethome(){
    hscore=0;
    homescore.textContent=0;
}

function resetaway(){
    ascore=0;
    awayscore.textContent=0;
}



