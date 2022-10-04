
let i = "";
let y = 0;
let dialogueCounter = 0;

let speed = 50;

function typeWriter(i) {
    
    
    let x=i.length;

    if (y===0){
        document.getElementById('textBox').innerHTML = ""
    }
    if ( y<x){
          
      
        let d =document.getElementById('textBox').innerHTML
        d = d + i[y];
        y++;
        document.getElementById('textBox').innerHTML = d;  
        setTimeout(()=>{ typeWriter(i)}, speed)
    }
    else {
     y = 0;
     let buttonCounter = 0;
     while (buttonCounter < buttons[dialogueCounter].length)
     {
        document.getElementById('textBox').innerHTML=document.getElementById('textBox').innerHTML + "<button id='nextButton' onclick='pushBtn()'>" + buttons[dialogueCounter][buttonCounter] + "</button>"; //obviously needs to be cleaned up and made into variables, just trying it out
        buttonCounter++;
    }
     dialogueCounter ++;
     buttonCounter = 0;
     
    }
};


function pushBtn(){
     typeWriter(dialogue[dialogueCounter])
}




let dialogue = ["well you look like one!", "Man, for an orc you sure talk funny!", "alright, whatever"]
let buttons = [["uhh....okay?"], ["listen...I'm really not an or-", "look maybe I am an orc" ,"haha yea I'm totally an orc"],["okay test", "what?"]]
let check = [[],[0,0,1],[]]//ad checks
let affinity = []

//let buttons = [["uhh....okay?", "You know it", "yeah","ME ORC!"]]



//dialogue button characteristics- shy stammering nerd, giga chad asshole, normal, ORC

//so this is going to be really ghetto- I could totally make a function to constantly 


//i'm really considering hand coding all dialogue through continued typwritter functions - I have automated making tasks-but it actually becomes just as convuluted through like 5-6 checks and branching paths end up happening which end up messing things up even more. I know it looks goofy but it makes more sense for me to just hand write everything with a simple copy paste.  