<script>
    import { createEventDispatcher } from 'svelte';
    import { thepage } from '../stores';

    const dispatch = createEventDispatcher();

    export let page = {
        name: "Меню",
        link: "menu",
        state: "selected"
    }
    export let currentPage = "menu";

    function setPage() {
        currentPage = page.link;
        dispatch('selectedPage', {
            selectedPage: page.link
        });
        thepage.update((val)=>{return page});
    }


</script>

{#if page.state === "selected"}
	<button on:click={setPage}><p class="selected">{page.name}</p></button>
{:else}
    <button on:click={setPage}><p>{page.name}</p></button>
{/if}

<style lang="scss">
    @use '../../styles' as *;

    p {
        color: #000;
        /* bigger */
        @include bigger($mobile: false);
    }

    .selected {
        color: #000;
        font-family: Roboto;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    button {
        transition-property: text-shadow;
        transition-duration: 0.35s;
    }

    button:hover {
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.20);
    }

    @media screen and (max-width: $break-tablet) {
    }
        
    @media screen and (max-width: $break-mobile) {
    }  
</style>

