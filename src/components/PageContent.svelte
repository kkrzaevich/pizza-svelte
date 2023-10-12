<script>
    import Header from "./Header/Header.svelte";
    import Menu from "./Menu/Menu.svelte";
    import Footer from "./Footer.svelte";
    import About from "./About.svelte";
    import Contacts from "./Contacts.svelte";
    import Cart from "./Cart.svelte";
    import Order from "./Order.svelte";
    import { displayOverlay } from "./stores";
    import { thepage } from "./stores";
    import Overlay from "./Overlay.svelte";
    import WorkInProgress from "./WorkInProgress.svelte";

    let currentPage="menu";
    let displayOverlayFlag=false;

    thepage.subscribe((val)=>{currentPage = val.link})

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
            {:else if currentPage === "order"} 
                <Order />  
            {:else if currentPage === "work-in-progress"} 
                <WorkInProgress />  
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
            {:else if currentPage === "order"} 
                <Order />  
            {:else if currentPage === "work-in-progress"} 
                <WorkInProgress />  
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
        min-width: 460px;
        flex-direction: column;
        align-items: center;
        gap: 70px;
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
            min-width: 320px;
            gap: 45px;
        }


    }            
</style>