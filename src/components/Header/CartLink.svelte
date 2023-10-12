<script>
    import { createEventDispatcher } from 'svelte';
    import { thepage } from '../stores';

    const dispatch = createEventDispatcher();

    let src1 = "/cart.svg"
    let alt1="Cart icon"

    export let page = {
        name: "Корзина",
        link: "cart",
        state: "default"
    }
    export let currentPage = "cart";

    function setPage() {
        currentPage = page.link;
        dispatch('selectedPage', {
            selectedPage: page.link
        });
        thepage.update((val)=>{return page});
    }


</script>

<button class="cart" on:click={setPage}><img src={src1} alt={alt1}></button>

<style>
    img:hover {
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.20));
    }

    @media screen and (max-width: 1119px) {
    }
        
    @media screen and (max-width: 699px) {
        .cart {
            width: 50px;
            height: 50px;
        }
    }  
</style>

