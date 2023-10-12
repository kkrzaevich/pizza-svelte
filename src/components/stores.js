import { writable } from 'svelte/store';

export const displayOverlay = writable(false);
export const selectedItem = writable({});
export const cart = writable([]);
export const thepage = writable({
    name: "Меню",
    link: "menu",
    state: "selected"
});