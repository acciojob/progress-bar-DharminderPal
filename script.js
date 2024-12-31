//your JS code here. If required.


const progress = document.getElementById('progress');
const pre = document.getElementById('pre');
const next = document.getElementById('next');
const circle = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click',()=>{
    currentActive++
    if(currentActive>circle.length){
        currentActive = circle.length;
}
// console.log(currentActive);
// console.log(currentActive);
update();
});
pre.addEventListener('click',()=>{
    currentActive--
    if(currentActive<1){
        currentActive = 1;
}
// console.log(currentActive);
// console.log(currentActive);
update();
});


function update(){
    circle.forEach((circle,idx)=>{
        if(idx<currentActive){
           circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })
    const actives =document.querySelectorAll('.active');
    progress.style.width=(actives.length/circle.length)*100+'%';
}