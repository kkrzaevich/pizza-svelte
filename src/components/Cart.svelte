<script>
    import { fade } from 'svelte/transition';
    import { fly } from 'svelte/transition';
    import { cart } from "./stores";
    import { selectedItem } from './stores';
    import { thepage } from './stores';
    import CartItem from './CartItem.svelte';

    let localItem = {};
    let localCart = [];
    let sum = 0;

    selectedItem.subscribe((item)=>{localItem = item})
    cart.subscribe((cart) => {
        localCart = cart;
        sum = 0;
        for (const cartItem of localCart) {
            sum += cartItem.price * cartItem.amount;
        }
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

<style lang="scss">
    @use '../styles' as *;

    section {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 70px;
        align-self: stretch;
    }

    h1 {
        width: 199px;
        height: 33px;
        flex-shrink: 0;
        color: var(--900, #000);
        /* logo-main */
        @include logo-main($mobile: false);
    }

    .empty-text {
        align-self: stretch;
        color: var(--900, #000);
        /* medium */
        @include medium($mobile: false);
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
        color: $outline-clr;
        /* bigger-bold */
        @include bigger-bold($mobile: false);
    }

    button {
        display: flex;
        padding: 20px 25px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        align-self: stretch;
        border-radius: 10px;
        background: $fill2-clr;
        box-shadow: 0px 5px 9px -1px rgba(0, 0, 0, 0.25);
    }

    span {
        color: $outline-clr;
        text-align: center;
        /* bigger-bold */
        @include bigger-bold($mobile: false);
    }



    @media screen and (max-width: $break-tablet) {

    }
        
    @media screen and (max-width: $break-mobile) {
        h1 {
            @include logo-main($mobile: true);
        }

        .empty-text {
            @include medium($mobile: true);
        }

        span, .sum {
            @include bigger-bold($mobile: true);
        }

        section {
            gap: 45px;
        }
    }  

</style>