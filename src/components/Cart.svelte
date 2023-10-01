<script>
    import { fade } from 'svelte/transition';
    import { fly } from 'svelte/transition';
    import { cart } from "./stores";
    import { selectedItem } from './stores';
    import { thepage } from './stores';
    import CartItem from './CartItem.svelte';

    import { onMount } from 'svelte';

    let localItem = {};
    let localCart = [];
    let amount = 1;
    let sum = 0;

    selectedItem.subscribe((item)=>{localItem = item})
    cart.subscribe((cart) => {
        localCart = cart;
        sum = 0;
        for (const cartItem of localCart) {
            sum += cartItem.price * cartItem.amount;
        }
    })

    onMount(() => {
        console.log(localCart.length)
    })

    let orderPage = {
        name: "Оформление заказа",
        link: "order",
        state: "default"
    }

    function goToOrderPage() {
        thepage.update((val)=>{return orderPage});
    }

</script>

<section in:fly={{ x: 200, duration: 1000 }} out:fade>
        <h1>Корзина</h1>
        {#if localCart.length === 0}
            <p class="empty-text">В корзине пусто :( </p>
        {:else}
            <div class="cart-items">
                {#each localCart as item}
                    <CartItem item = {item}/>
                {/each}
            </div>
            <p class="sum">Итого: {sum} тг.</p>
            <button on:click={goToOrderPage}><span>Перейти к оформлению заказа</span></button>
        {/if}
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 4.375rem;
        align-self: stretch;
    }

    h1 {
        width: 12.4375rem;
        height: 2.0625rem;
        flex-shrink: 0;
        color: var(--900, #000);
        /* logo-main */
        font-family: Roboto;
        font-size: 2.25rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    .empty-text {
        align-self: stretch;
        color: var(--900, #000);
        /* medium */
        font-family: Roboto;
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .cart-items {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        gap: 30px;
        align-self: stretch;
    }

    .sum {
        width: 199px;
        height: 33px;
        color: var(--900, #000);
        /* bigger-bold */
        font-family: Roboto;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    button {
        display: flex;
        padding: 20px 25px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        align-self: stretch;
        border-radius: 10px;
        background: var(--200, #FFCDA8);
        box-shadow: 0px 5px 9px -1px rgba(0, 0, 0, 0.25);
    }

    span {
        color: var(--900, #000);
        text-align: center;
        /* bigger-bold */
        font-family: Roboto;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }



    @media screen and (max-width: 1119px) {

    }
        
    @media screen and (max-width: 699px) {

    }  

</style>