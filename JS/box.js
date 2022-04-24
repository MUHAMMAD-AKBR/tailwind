export const canvas = document.querySelector('.canvas');
export const ecom = document.querySelector('.ecom');
export const other = document.querySelector('.other');
const dialogbox = document.querySelector('.dialogbox');
export function cHandler() {
    dialogbox.classList.toggle('opacity-0');
    let content = canvas.textContent;
    dialogbox.textContent = content;
}
export function eHandler() {
    dialogbox.classList.toggle('opacity-0');
    let content = ecom.textContent;
    dialogbox.textContent = content;
}
export function oHandler() {
    dialogbox.classList.toggle('opacity-0');
    let content = other.textContent;
    dialogbox.textContent = content;
}
