<script>
    export let id="id";
    export let sectionName="Пицца";
    export let menuItems=[];

    import MenuItem from "./MenuItem.svelte";
</script>

<section {id}>
    <h1>{sectionName}</h1>
    <div class="menu-pizza-grid">
        {#each menuItems as item}
            <MenuItem heading = {item.heading} description = {item.description} src = {item.src}/>
        {/each}
    </div>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 4.375rem;
        align-self: stretch;
    }

    h1 {
        color: #000;
        /* logo-main */
        font-family: Roboto;
        font-size: 2.25rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    div {
        display: flex;
        align-items: center;
        align-content: center;
        gap: 1.75rem 3rem;
        align-self: stretch;
        flex-wrap: wrap;
    }
</style>