<script>
    import NavbarItem from "./NavbarItem.svelte";
    let src = "/cart.svg"
    let alt="Cart icon"

    export let currentPage="menu"

    $: pages = [
        {name: "Меню", link: "menu", state: "selected"},
        {name: "О нас", link: "about", state: "default"},
        {name: "Контакты", link: "contacts", state: "default"}
    ]

    function deselectPages(event) {
        pages.forEach((page) => {
            if (page.link === event.detail.selectedPage) {
                page.state = "selected"
            } else {
                page.state = "default"
            }
        })
        pages = pages;
        console.log(pages);
    }

    

</script>

<section>
    <div>
        {#each pages as pageDetails}
            <NavbarItem on:selectedPage={deselectPages} bind:currentPage page={pageDetails}/>
        {/each}
    </div>
    <button><img {src} {alt}></button>
</section>

<style>
    img:hover {
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.20));
    }

    img {
        transition-property: filter;
        transition-duration: 0.35s;        
    }

    div {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        gap: 2rem;
    }

    section {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 2rem;
    }
</style>