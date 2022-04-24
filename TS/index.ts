import {canvas, ecom, other, cHandler, eHandler, oHandler} from "./box.js";
const homeBtn = document.querySelector('.home-btn');
const aboutBtn = document.querySelector('.about-btn');
const followBtn = document.querySelector('.follow-btn');

homeBtn.addEventListener('mouseover', e => {
    let target = (e.target as HTMLDivElement);
    if(e.target == homeBtn){
        (target.childNodes[1] as HTMLDivElement).classList.remove('hidden');
        (target.childNodes[1] as HTMLDivElement).classList.add('flex');
    }
})

homeBtn.addEventListener('mouseout', e => {
    let target = (e.target as HTMLDivElement);
    if(e.target == homeBtn){
        (target.childNodes[1] as HTMLDivElement).classList.remove('flex');
        (target.childNodes[1] as HTMLDivElement).classList.add('hidden');
    }
})

followBtn.addEventListener('mouseover', e => {
    let target = (e.target as HTMLDivElement);
    if(e.target == followBtn){
        (target.childNodes[1] as HTMLDivElement).classList.remove('hidden');
        (target.childNodes[1] as HTMLDivElement).classList.add('flex');
    }
})

followBtn.addEventListener('mouseout', e => {
    let target = (e.target as HTMLDivElement);
    if(e.target == followBtn){
        (target.childNodes[1] as HTMLDivElement).classList.remove('flex');
        (target.childNodes[1] as HTMLDivElement).classList.add('hidden');
    }
})

aboutBtn.addEventListener('mouseover', e => {
    let target = (e.target as HTMLDivElement);
    if(e.target == aboutBtn){
        (target.childNodes[1] as HTMLDivElement).classList.remove('hidden');
        (target.childNodes[1] as HTMLDivElement).classList.add('flex');
    }
})

aboutBtn.addEventListener('mouseout', e => {
    let target = (e.target as HTMLDivElement);
    if(e.target == aboutBtn){
        (target.childNodes[1] as HTMLDivElement).classList.remove('flex');
        (target.childNodes[1] as HTMLDivElement).classList.add('hidden');
    }
})


// card dialogbox

canvas.addEventListener('click', cHandler)
ecom.addEventListener('click', eHandler)
other.addEventListener('click', oHandler);