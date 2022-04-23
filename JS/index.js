import { all_cards, make_box } from "./box.js";
const homeBtn = document.querySelector('.home-btn');
const aboutBtn = document.querySelector('.about-btn');
const followBtn = document.querySelector('.follow-btn');
const container_content = document.querySelector('.container-content');
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
all_cards.forEach(card => {
    let target = card;
    target.addEventListener('click', event => {
        let real_event = event.target;
        let box = make_box();
        container_content.appendChild(box);
    });
});
