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
            <MenuItem heading = {item.heading} description = {item.description} src = {item.src} price={item.price} weight={item.weight} ingredients={item.ingredients}/>
        {/each}
    </div>
</section>

<style lang="scss">
    @use '../../styles' as *;

    section {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 70px;
        align-self: stretch;
    }

    h1 {
        color: #000;
        /* logo-main */
        @include logo-main($mobile: false);
    }

    div {
        display: flex;
        align-items: center;
        align-content: center;
        gap: 28px 48px;
        align-self: stretch;
        flex-wrap: wrap;
    }

    @media screen and (max-width: $break-tablet) {
    }
        
    @media screen and (max-width: $break-mobile) {
        section {
            gap: 45px;
        }

        h1 {
            @include small-bold($mobile: true);
        }

        div {
            gap: 45px 48px;
        }
    } 
</style>