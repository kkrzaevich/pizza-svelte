<script>
    import Header from "./Header/Header.svelte";
    import Menu from "./Menu/Menu.svelte";
    import Footer from "./Footer.svelte";
</script>

<div>
    <Header />
    <Menu />
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