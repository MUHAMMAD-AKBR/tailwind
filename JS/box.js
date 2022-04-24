export const canvas = document.querySelector('.canvas');
export const ecom = document.querySelector('.ecom');
export const other = document.querySelector('.other');
export function cHandler() {
    canvas.addEventListener('click', () => {
        console.log("oke");
    });
}
export function eHandler() {
    ecom.addEventListener('click', () => {
        console.log("oke");
    });
}
export function oHandler() {
    other.addEventListener('click', () => {
        console.log("oke");
    });
}
