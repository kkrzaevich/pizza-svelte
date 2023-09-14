<script>
    import { cart } from "./stores";
    import { selectedItem } from './stores';

    let localItem = {};
    let localCart = [];
    let amount = 1;

    selectedItem.subscribe((item)=>{localItem = item})
    cart.subscribe((cart)=>{localCart = cart})

    export let item = {
        heading: "Супер пицца",
        description: "Самая вкусная в Казахстане",
        src: "./pizza1.png",
        price: 2500,
        ingredients: "вода, сахар, соль, рог единорога",
        weight: 750,
        amount: 1,
    }

    const increment = () => {
        if (localItem.amount <= 99) {
            localItem.amount++;
            selectedItem.update((val) => localItem)
        }
    }

    const decrement = () => {
        if (localItem.amount >= 2) {
            localItem.amount--;
            selectedItem.update((val) => localItem)
        }
    }

    const add = () => {
        localCart.push(localItem)
        cart.update((cart) => localCart)
    }
</script>

<section>
    <img src={item.src} alt="item pic">
    <div class="annotations">
        <h1>{item.heading}</h1>
        <p>{item.price}</p>
    </div>
    <div class="add">
        <div class="amount">
            <button on:click={decrement}><span class="amount-text">-</span></button>
            <p><span class="amount-text">{localItem.amount}</span></p>
            <button on:click={increment}><span class="amount-text">+</span></button>
        </div>
        <button class="delete-button" on:click={add}><span class="add-text">В корзину</span></button>
    </div>

</section>

<style>

</style>