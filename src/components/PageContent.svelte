<script>
    import Header from "./Header/Header.svelte";
    import Menu from "./Menu/Menu.svelte";
    import Footer from "./Footer.svelte";
    import About from "./About.svelte";
    import Contacts from "./Contacts.svelte";

    let currentPage="menu"

</script>

<div>
    <Header bind:currentPage/>

    {#if currentPage === "menu"}
        <Menu />        
    {:else if currentPage === "about"} 
        <About />     
    {:else if currentPage === "contacts"} 
        <Contacts />     
    {:else}
        <p>Not found :(</p>        
    {/if}

    <Footer />
</div>

<style>
    div {
        display: flex;
        min-width: 28.75rem;
        flex-direction: column;
        align-items: center;
        gap: 4.375rem;
        flex: 1 0 0;
    }
</style>