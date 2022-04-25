export const canvas = document.querySelector('.canvas') as HTMLDivElement;
export const ecom = document.querySelector('.ecom') as HTMLDivElement;
export const other = document.querySelector('.other') as HTMLDivElement;
const dialogbox = document.querySelector('.dialogbox') as HTMLDivElement;

export function cHandler(){
    dialogbox.classList.toggle('opacity-0');
    dialogbox.classList.add('animate-pop');
    setTimeout(() => {
        dialogbox.classList.remove('animate-pop')
    }, 400)
    let content = canvas.textContent;
    dialogbox.textContent = content;
}

export function eHandler(){
    dialogbox.classList.toggle('opacity-0');
    dialogbox.classList.add('animate-pop');
    setTimeout(() => {
        dialogbox.classList.remove('animate-pop')
    }, 400)
    let content = ecom.textContent;
    dialogbox.textContent = content;
}

export function oHandler(){
    dialogbox.classList.toggle('opacity-0');
    dialogbox.classList.add('animate-pop');
    setTimeout(() => {
        dialogbox.classList.remove('animate-pop')
    }, 400)
    let content = other.textContent;
    dialogbox.textContent = content;
}