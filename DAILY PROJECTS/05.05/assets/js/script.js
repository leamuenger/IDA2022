console.log('godag')

let n = 0; 
function buttonPressed() {
    n++; 
    document.getElementById("element").style.left = (n*20) + "px";
}
function neuesElement() {
    let div = document.createElement("div");
    div.classList.add('smiley');
    div.style.left = Math.random() * window.innerWidth + "px";
    div.style.top = Math.random() * window.innerHeight + "px";
    document.body.appendChild(div);
}