<script>
    import Navbar from "./Navbar.svelte";
    import Logo from "./Logo.svelte";

    export let currentPage="menu"


</script>

<div>
    <Logo/>
    <Navbar bind:currentPage/>
</div>

<style>
    div {
        display: grid;
        grid-auto-flow: column;
        justify-content: space-between;
        align-items: center;
        align-content: space-between;
        align-self: stretch;
        flex-wrap: wrap;
        width: 100%;
    }

    @media screen and (max-width: 1119px) {
    }
        
    @media screen and (max-width: 699px) {
    }  
</style>