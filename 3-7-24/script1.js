let arr=["stone","paper","scissor"];
let rand = Math.floor(Math.random()*3);

let selComputer=arr[rand];


let compScore=document.querySelector(".compScore");

let yourScore=document.querySelector(".yourScore");

let win=document.querySelector(".win");


let stone=document.querySelector(".stone");

stone.onclick=()=>{
    
    let temp=Math.floor(Math.random()*3);
    let compSel=arr[temp];
    if(compSel=="paper"){
        let newcompScore=parseInt(compScore.textContent)+1;
        compScore.textContent = newcompScore;
        win.innerHTML="comp won! paper beats stone";

    }
    if(compSel=="scissor"){
        let newcompScore=parseInt(yourScore.textContent)+1;
        yourScore.textContent = newcompScore;
        win.innerHTML="you won! stone beats scissor";
    }
}

let paper=document.querySelector(".paper");

paper.onclick=()=>{
    let temp=Math.floor(Math.random()*3);
    let compSel=arr[temp];
    if(compSel=="stone"){
        let newcompScore=parseInt(yourScore.textContent)+1;
        yourScore.textContent = newcompScore;
        win.innerHTML="you won! paper beats stone";
    }
    if(compSel=="scissor"){
        let newcompScore=parseInt(compScore.textContent)+1;
        compScore.textContent = newcompScore;
        win.innerHTML="comp won! scissor beats paper";
    }
}

let scissor=document.querySelector(".scissor");

scissor.onclick=()=>{
    let temp=Math.floor(Math.random()*3);
    let compSel=arr[temp];
    if(compSel=="stone"){
        let newcompScore=parseInt(compScore.textContent)+1;
        compScore.textContent = newcompScore;
        win.innerHTML="comp won! stone beats scissor";
    }
    if(compSel=="paper"){
        let newcompScore=parseInt(yourScore.textContent)+1;
        yourScore.textContent = newcompScore;
        win.innerHTML="you won! scissor beats paper";
    }
}