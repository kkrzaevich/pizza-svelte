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

<style lang="scss">
    @use '../../styles' as *;

    div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 70px;
        align-self: stretch;
    }

    @media screen and (max-width: $break-tablet) {
    }
        
    @media screen and (max-width: $break-mobile) {
        div {
            gap: 45px;
        }
    }  
</style>