const body = document.querySelector('body');

body.addEventListener('mousemove',function(event){
const x = event.offsetX;
const y = event.offsetY;

const spanE1 = document.createElement('span');
spanE1.style.left=x+"px";
spanE1.style.top=y+"px";
body.appendChild(spanE1);
const randome = Math.random()
spanE1.style.width=randome*100;
spanE1.style.height=randome*100;
setTimeout(function(){
    spanE1.remove()
},3000)
})