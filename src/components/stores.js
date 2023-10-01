import { writable } from 'svelte/store';

export const displayOverlay = writable(false);
export const selectedItem = writable({});
export const cart = writable([]);
export const user = writable([]);
export const thepage = writable({
    name: "Меню",
    link: "menu",
    state: "selected"
});

export async function sendData () {
    try {const res = await fetch(`http://localhost:8080/items/`, {
        credentials:'include',
        method: 'POST',
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify([cart, user]),
    })

    if (!res.ok) {
        throw new Error(`An error has occured: ${res.status}`)
        alert("Ошибка в заказе")
    } else {
        alert("Ваш заказ был принят")
    }
} catch(err) {
        throw new Error(`An error has occured: ${err.message}`)
        alert("Ошибка в заказе")
    }
}