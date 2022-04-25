export const canvas = document.querySelector('.canvas');
export const ecom = document.querySelector('.ecom');
export const other = document.querySelector('.other');
const dialogbox = document.querySelector('.dialogbox');
let c_text = `<div class="grid-canvas grid grid-cols-2 gap-2">
            <div class="grid-itemcanvas border border-green-400 rounded-sm p-2 font-header text-lg text-center cursor-pointer"> Matrix</div>
             <div class="grid-itemcanvas  border border-green-400 rounded-sm p-2 font-header text-lg text-center cursor-pointer"> Falling balls</div>
    </div>`;
let e_text = ` <div class="grid-canvas grid grid-cols-1 gap-2">
            <div class="grid-itemcanvas border border-green-400 rounded-sm p-2 font-header text-lg text-center cursor-pointer">Cart Feature</div>
</div>`;
let o_text = `<div class="grid-canvas grid grid-cols-1 gap-2">
            <div class="grid-itemcanvas border border-green-400 rounded-sm p-2 font-header text-lg text-center cursor-pointer">Other...</div>
</div>`;
export function cHandler() {
    dialogbox.classList.toggle('opacity-0');
    dialogbox.classList.add('animate-pop');
    setTimeout(() => {
        dialogbox.classList.remove('animate-pop');
    }, 400);
    dialogbox.innerHTML = c_text;
}
export function eHandler() {
    dialogbox.classList.toggle('opacity-0');
    dialogbox.classList.add('animate-pop');
    setTimeout(() => {
        dialogbox.classList.remove('animate-pop');
    }, 400);
    dialogbox.innerHTML = e_text;
}
export function oHandler() {
    dialogbox.classList.toggle('opacity-0');
    dialogbox.classList.add('animate-pop');
    setTimeout(() => {
        dialogbox.classList.remove('animate-pop');
    }, 400);
    dialogbox.innerHTML = o_text;
}
