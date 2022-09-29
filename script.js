
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
     document.getElementById('textBox').innerHTML=document.getElementById('textBox').innerHTML + "<button id='nextButton' onclick='pushBtn()'>" + buttons[dialogueCounter] + "</button>";
     dialogueCounter ++;
     
    }
};


function pushBtn(){
     typeWriter(dialogue[dialogueCounter])
}


let dialogue = ["well you look like one!", "Man, for an orc you sure talk funny!"]
let buttons = ["uhh....okay?", "listen...I'm really not an or-"]