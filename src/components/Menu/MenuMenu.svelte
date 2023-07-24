<script>
    import MenuSection from "./MenuSection.svelte";

    import MenuItem from "./MenuItem.svelte";
    import Menu from "./Menu.svelte";
</script>

<div>
    <MenuSection id="#pizza"/>
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