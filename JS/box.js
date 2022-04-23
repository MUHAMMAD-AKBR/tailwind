export const all_cards = document.querySelectorAll('.card');
export function make_box() {
    const dialogbox = document.createElement('div');
    dialogbox.classList.add('w-52');
    dialogbox.classList.add('h-52');
    dialogbox.classList.add('dialogbox');
    return dialogbox;
}
