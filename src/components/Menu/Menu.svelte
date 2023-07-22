<script>
    import MenuChoose from "./MenuChoose.svelte";
    import MenuMenu from "./MenuMenu.svelte";
</script>

<div>
    <MenuChoose />
    <MenuMenu />
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 4.375rem;
        align-self: stretch;
    }
</style>