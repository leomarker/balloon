document.addEventListener('mousemove',trail);

function trail(e){
    let element = document.querySelector('body');
    let div = document.createElement('div');
    div.className = 'dot';
    div.style.left = (e.pageX - 4) + "px";
    div.style.top = (e.pageY - 4) +"px";
    element.appendChild(div);
    setTimeout(()=>{
     div.remove();
    },100);
    
}