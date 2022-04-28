export const canvas = document.querySelector('.canvas');
export const ecom = document.querySelector('.ecom');
export const other = document.querySelector('.other');
export const balls = document.querySelector('.balls');
export const cart = document.querySelector('.cart');
export const oth = document.querySelector('.oth');
const box1 = balls.getBoundingClientRect();
const box2 = cart.getBoundingClientRect();
const box3 = oth.getBoundingClientRect();
export const scroll1 = () => {
    window.scrollTo({
        top: box1.y + 10,
        behavior: "smooth"
    });
};
export const scroll2 = () => {
    window.scrollTo({
        top: box2.y,
        behavior: "smooth"
    });
};
export const scroll3 = () => {
    window.scrollTo({
        top: box3.y,
        behavior: "smooth"
    });
};
