<script>
    import Header from "./Header/Header.svelte";
    import Menu from "./Menu/Menu.svelte";
    import Footer from "./Footer.svelte";
    import About from "./About.svelte";
    import Contacts from "./Contacts.svelte";
    import Cart from "./Cart.svelte";
    import { displayOverlay } from "./stores";
    import { cart } from "./stores";
    import { thepage } from "./stores";
    import Overlay from "./Overlay.svelte";

    let currentPage="menu";
    let displayOverlayFlag=false;

    thepage.subscribe((val)=>(currentPage = val.link))

    displayOverlay.subscribe((value)=>{displayOverlayFlag = value})
</script>

<section>
    {#if displayOverlayFlag}
        <div class="page disabled">
            <Header/>

            {#if currentPage === "menu"}
                <Menu />        
            {:else if currentPage === "about"} 
                <About />     
            {:else if currentPage === "contacts"} 
                <Contacts />  
            {:else if currentPage === "cart"} 
                <Cart />    
            {:else}
                <p>Not found :(</p>        
            {/if}
        
            <Footer />
        </div>
        <div class="overlay">
            <Overlay/>
        </div>
    {:else}
        <div class="page">
            <Header/>

            {#if currentPage === "menu"}
                <Menu />        
            {:else if currentPage === "about"} 
                <About />     
            {:else if currentPage === "contacts"} 
                <Contacts />     
            {:else if currentPage === "cart"} 
                <Cart />  
            {:else}
                <p>Not found :(</p>        
            {/if}
        
            <Footer />
        </div>
    {/if}
</section>

<style>
    .disabled {
        height: 100%;
        overflow-y: hidden;
        filter: blur(3px);
    }

    .overlay {
        position: fixed;
        top: 50vh;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .page {
        display: flex;
        min-width: 28.75rem;
        flex-direction: column;
        align-items: center;
        gap: 4.375rem;
        flex: 1 0 0;
    }

    @media screen and (max-width: 1119px) {
        .overlay {
            position: fixed;
            top: 50vh;
            left: 50%;
            transform: translate(-50%, -50%);
            min-width: none;
        }
    }
        
    @media screen and (max-width: 699px) {
        .page {
            min-width: 20rem;
            gap: 2.8125rem;
        }


    }            
</style>