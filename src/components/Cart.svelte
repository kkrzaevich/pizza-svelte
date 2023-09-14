<script>
    import { fade } from 'svelte/transition';
    import { fly } from 'svelte/transition';
    import { cart } from "./stores";
    import { selectedItem } from './stores';
    import CartItem from './CartItem.svelte';

    let localItem = {};
    let localCart = [];
    let amount = 1;

    selectedItem.subscribe((item)=>{localItem = item})
    cart.subscribe((cart)=>{localCart = cart})


</script>

<section in:fly={{ x: 200, duration: 1000 }} out:fade>
        <h1>Корзина</h1>
        <div class="cart-items">
            {#each localCart as item}
                <CartItem item = {item}/>
            {/each}

        </div>
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

    @media screen and (max-width: 1119px) {

    }
        
    @media screen and (max-width: 699px) {

    }  

</style>