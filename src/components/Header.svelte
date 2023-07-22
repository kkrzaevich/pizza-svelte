<script>
    import Logo from "./Logo.svelte";
    import Navbar from "./Navbar.svelte";
</script>

<div>
    <Logo />
    <Navbar />
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
</style>