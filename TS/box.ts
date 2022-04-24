export const canvas = document.querySelector('.canvas') as HTMLDivElement;
export const ecom = document.querySelector('.ecom') as HTMLDivElement;
export const other = document.querySelector('.other') as HTMLDivElement;

export function cHandler(){
    canvas.addEventListener('click',() => {
        console.log("oke")
    })
}

export function eHandler(){
    ecom.addEventListener('click',() => {
        console.log("oke")
    })
}

export function oHandler(){
    other.addEventListener('click',() => {
        console.log("oke")
    })
}