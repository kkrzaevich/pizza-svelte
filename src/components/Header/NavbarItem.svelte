<script>
    export let page = {
        name: "Меню",
        link: "menu",
        state: "selected"
    }
    export let currentPage = "menu";

    function setPage() {
        currentPage = page.link;
    }


</script>

{#if page.state === "selected"}
	<button on:click={setPage}><p class="selected">{page.name}</p></button>
{:else}
    <button on:click={setPage}><p>{page.name}</p></button>
{/if}

<style>
    p {
        color: #000;
        /* bigger */
        font-family: Roboto;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .selected {
        color: #000;
        font-family: Roboto;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    button:hover {
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.10);
    }
</style>

