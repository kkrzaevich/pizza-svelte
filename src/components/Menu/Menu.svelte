<script>
    import MenuChoose from "./MenuChoose.svelte";
    import MenuMenu from "./MenuMenu.svelte";
    import { fade } from 'svelte/transition';
    import { fly } from 'svelte/transition';
</script>

<div in:fly={{ x: 200, duration: 1000 }} out:fade>
    <MenuChoose />
    <MenuMenu />
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 70px;
        align-self: stretch;
    }

    @media screen and (max-width: 1119px) {
    }
        
    @media screen and (max-width: 699px) {
        div {
            gap: 45px;
        }
    }  
</style>