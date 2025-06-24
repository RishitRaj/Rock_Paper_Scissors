let choices= document.querySelectorAll(".choices");
let currchoice= "none";
let comp= "none";
let innerboxes= document.querySelectorAll(".innerboxes");
let yourchoice= innerboxes[0];
let compchoice= innerboxes[2];
let result= document.querySelector(".results");
let outcome= "none";
let uscore= document.querySelector("#uscore");
let cscore= document.querySelector("#cscore");
let resetbtn= document.querySelector("#reset");
let uval= 0;
let cval=0;
uscore.innerText= 0;
cscore.innerText= 0;
player();
function player(){
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        currchoice= choice.getAttribute("id");
        yourchoice.innerText= "Your Choice: "+currchoice;
        generate();
        outcome =decider();
        if(outcome==="win"){
            uval+=1;
            uscore.innerText= uval;
            result.innerText= "You Win!"
        }
        else if (outcome==="lose"){
            cval+=1;
            cscore.innerText= cval;
            result.innerText= "You Lose!"
        }
    })
})
}
function generate(){
    const choices = ["Rock", "Paper", "Scissors"];
    let rnidx = Math.floor(Math.random()*3);
    comp= choices[rnidx]
    compchoice.innerText= "Computer's Choice: "+comp;
}

function decider(){
    if (currchoice===comp){
        result.innerText= "Its a tie!";
        return "tie";
    };
    if (currchoice==="Rock"){
        outcome= comp=== "Paper"? "lose": "win";
    }
    if (currchoice==="Paper"){
        outcome= comp==="Rock"? "win": "lose";
    }
    if (currchoice==="Scissors"){
        outcome= comp==="Rock"? "lose": "win";
    }
    return outcome;

}

function reset(){
    currchoice="none";
    comp= "none";
    outcome= "none";
    uval= 0;
    cval=0;
    uscore.innerText= 0;
    cscore.innerText= 0;
    result.innerText= "Play Your Move"
}
resetbtn.addEventListener("click", reset);


