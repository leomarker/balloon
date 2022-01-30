
 let balloon = document.getElementById("balloon");
 document.addEventListener("keydown",resize);
 document.addEventListener("keydown",minmize);
 console.log(balloon);

let la;
function resize(e){
 if(e.key == "ArrowUp"){
   let  va = getComputedStyle(balloon)
   let ba = va.getPropertyValue('font-size');
    let  la = parseFloat(ba);
    let fina_l = la*1/10;
    console.log(la);
    if(la > 400){
      bombTimer();
      balloon.removeEventListener('keydown',resize(),true);
      balloon.removeEventListener('keydown',minmize(),true);
    }
      balloon.style.fontSize = la + fina_l + 'px';
      console.log("fontsize")
      }
}

function minmize(e){
    if(e.key == "ArrowDown"){
      let  va = getComputedStyle(balloon)
      let ba = va.getPropertyValue('font-size');
      la = parseFloat(ba);
      let fina_l = la*1/10;
      console.log(la);
      if(la > 400){
        bombTimer();
        balloon.removeEventListener('keydown',resize,true);
        balloon.removeEventListener('keydown',minmize,true);
      }

      balloon.style.fontSize = la - fina_l + 'px';
      console.log("fontsize")
   
    }
}


function bombTimer() {
   balloon.innerHTML = "&#x1F4A5;";
   balloon.style.fontSize = 200 + 'px';
   sadFace();
   backto();
}

function sadFace(){
  setTimeout(()=>{
    balloon.innerHTML = "&#x1F62D";
    balloon.style.fontSize = 400 + 'px';
    },2000)
}
function backto(){
setTimeout(()=>{
  balloon.innerHTML = "&#x1F388";
  balloon.style.fontSize = 80 + 'px';
  },4000)
}







