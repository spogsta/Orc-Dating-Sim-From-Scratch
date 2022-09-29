
let i = "";
let y = 0;

let speed = 50;

function typeWriter(i) {
    let z=i;
    
    let x=z.length;

    if (y===0){
        document.getElementById('textBox').innerHTML = ""
    }
    if ( y<x){
          
        console.log(x) 
        console.log(y)
        console.log(z[y])
        let d =document.getElementById('textBox').innerHTML
        d = d + z[y];
        y++
        console.log(d)
        
        document.getElementById('textBox').innerHTML = d;  
        setTimeout(()=>{ typeWriter(z)}, speed)
    }
    else {
     y = 0;
    }
};


function pushBtn(){
     typeWriter("where am I?")
}


