import { canvas, ecom, other, scroll1, scroll2, scroll3, balls } from "./scroll.js";
const homeBtn = document.querySelector('.home-btn');
const aboutBtn = document.querySelector('.about-btn');
const followBtn = document.querySelector('.follow-btn');
homeBtn.addEventListener('mouseover', e => {
    let target = e.target;
    if (e.target == homeBtn) {
        target.childNodes[1].classList.remove('hidden');
        target.childNodes[1].classList.add('flex');
    }
});
homeBtn.addEventListener('mouseout', e => {
    let target = e.target;
    if (e.target == homeBtn) {
        target.childNodes[1].classList.remove('flex');
        target.childNodes[1].classList.add('hidden');
    }
});
followBtn.addEventListener('mouseover', e => {
    let target = e.target;
    if (e.target == followBtn) {
        target.childNodes[1].classList.remove('hidden');
        target.childNodes[1].classList.add('flex');
    }
});
followBtn.addEventListener('mouseout', e => {
    let target = e.target;
    if (e.target == followBtn) {
        target.childNodes[1].classList.remove('flex');
        target.childNodes[1].classList.add('hidden');
    }
});
aboutBtn.addEventListener('mouseover', e => {
    let target = e.target;
    if (e.target == aboutBtn) {
        target.childNodes[1].classList.remove('hidden');
        target.childNodes[1].classList.add('flex');
    }
});
aboutBtn.addEventListener('mouseout', e => {
    let target = e.target;
    if (e.target == aboutBtn) {
        target.childNodes[1].classList.remove('flex');
        target.childNodes[1].classList.add('hidden');
    }
});
// card dialogbox
canvas.addEventListener('click', scroll1);
ecom.addEventListener('click', scroll2);
other.addEventListener('click', scroll3);
balls.addEventListener('click', () => {
    console.log("test");
});
