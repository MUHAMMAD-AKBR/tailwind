export const grid = document.querySelector('.grid-projects') as HTMLDivElement;

export function validate(length: number){
    if(grid.children.length % 2 !== 0){
        grid.children[grid.children.length - 1].classList.add('col-span-2')
    }
}
