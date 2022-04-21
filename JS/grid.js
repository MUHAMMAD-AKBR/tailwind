export const grid = document.querySelector('.grid-projects');
export function validate(length) {
    if (grid.children.length % 2 !== 0) {
        grid.children[grid.children.length - 1].classList.add('col-span-2');
    }
}
