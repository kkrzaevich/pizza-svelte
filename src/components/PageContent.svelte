<script>
    import Header from "./Header.svelte";
    import Menu from "./Menu.svelte";
    import Footer from "./Footer.svelte";
</script>

<Header />
<Menu />
<Footer />

<style>
    body {
        display: flex;
        min-width: 28.75rem;
        flex-direction: column;
        align-items: center;
        gap: 4.375rem;
        flex: 1 0 0;
    }
</style>