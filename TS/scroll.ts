export const canvas = document.querySelector('.canvas') as HTMLDivElement;
export const ecom = document.querySelector('.ecom') as HTMLDivElement;
export const other = document.querySelector('.other') as HTMLDivElement;

export const balls = document.querySelector('.balls') as HTMLDivElement;
export const cart = document.querySelector('.cart') as HTMLDivElement;
export const oth = document.querySelector('.oth') as HTMLDivElement;

const box1 = balls.getBoundingClientRect();
const box2 = cart.getBoundingClientRect();
const box3 = oth.getBoundingClientRect();

export const scroll1 = () => {
    window.scrollTo({
        top: box1.y + 10,
        behavior: "smooth"
    })
}

export const scroll2 = () => {
    window.scrollTo({
        top: box2.y,
        behavior: "smooth"
    })
}
export const scroll3 = () => {
    window.scrollTo({
        top: box3.y,
        behavior: "smooth"
    })
}