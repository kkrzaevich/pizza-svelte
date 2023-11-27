<script>
    import Navbar from "./Navbar.svelte";
    import Logo from "./Logo.svelte";


</script>

<div>
    <Logo/>
    <Navbar/>
</div>

<style lang="scss">
    @use '../../styles' as *;
    
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

    @media screen and (max-width: $break-tablet) {
    }
        
    @media screen and (max-width: $break-mobile) {
    }  
</style>