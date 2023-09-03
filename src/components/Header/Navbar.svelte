<script>
    import NavbarItem from "./NavbarItem.svelte";
    let src1 = "/cart.svg"
    let alt1="Cart icon"
    let src2 = "/hamburger.svg"
    let alt2="Menu icon"

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
    <button class="cart"><img src={src1} alt={alt1}></button>
    <button class="hamburger"><img src={src2} alt={alt2}></button>
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

    .hamburger {
        width: 3.6rem;
        height: 2.4rem;
        display: none;
    }

    @media screen and (max-width: 1119px) {
        div {
            display: none;
            visibility: hidden;
        }

        .cart {
            display: none;
            visibility: hidden;
        }

        .hamburger {
            display: flex;
        }
    }

    @media screen and (max-width: 699px) {
        .hamburger {
            width: 2.5rem;
            height: 1.875rem;
        }
    }
</style>