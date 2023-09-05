<script>
    import { fly } from 'svelte/transition';
    import NavbarItem from "./NavbarItem.svelte";
    $: outerWidth = 0

    $: hamburgerClicked = false;
    
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
        hamburgerClicked = false;
    }

    

</script>

<svelte:window bind:outerWidth/>

<section>
    {#if outerWidth >= 1134}
        <div class="links">
            {#each pages as pageDetails}
                <NavbarItem on:selectedPage={deselectPages} bind:currentPage page={pageDetails}/>
            {/each}
        </div>
        <button class="cart"><img src={src1} alt={alt1}></button>
    {:else}
        {#if hamburgerClicked}
            <div class="overlay-container" in:fly={{ x: 200, duration: 500 }} out:fly={{ x: 200, duration: 500 }}>
                <div class="overlay-menu">
                    <button class="hamburger" on:click={() => {hamburgerClicked = false}}><img src={src2} alt={alt2}></button>
                    <div class="links">
                        {#each pages as pageDetails}
                            <NavbarItem on:selectedPage={deselectPages} bind:currentPage page={pageDetails}/>
                        {/each}
                    <button class="cart" on:click={() => {hamburgerClicked = false}}><img src={src1} alt={alt1}></button>
                    </div>
                </div>
            </div>
        {:else}
            <button class="hamburger" in:fly={{ x: 200, duration: 500 }} out:fly={{ x: 200, duration: 500 }} on:click={() => {hamburgerClicked = true}}><img src={src2} alt={alt2}></button>
        {/if}
    {/if}
</section>

<style>
    img:hover {
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.20));
    }

    img {
        transition-property: filter;
        transition-duration: 0.35s;        
    }

    .links {
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

    @media screen and (max-width: 1119px) {

        .hamburger {
            width: 3.6rem;
            height: 2.4rem;
            display: flex;
        }

        .overlay-container {
            position: fixed;
            top: 0px;
            right: 0px;
            z-index: 2;

            display: flex;
            width: 21.875rem;
            padding: 6.25rem 5rem;
            justify-content: flex-end;
            align-items: center;
            align-content: center;
            gap: 0.625rem;
            flex-wrap: wrap;
            background: #FFF;
        }

        .overlay-menu {

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-end;
            gap: 6.25rem;
            flex: 1 0 0;
        }

        .links {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-end;
            gap: 1.875rem;
        }

    }

    @media screen and (max-width: 699px) {

        .hamburger {
            width: 2.5rem;
            height: 1.875rem;
        }

        .overlay-container {
            position: fixed;
            top: 0px;
            right: 0px;
            z-index: 2;

            display: flex;
            width: 11.25rem;
            padding: 2.8125rem 1.25rem;
            justify-content: flex-end;
            align-items: center;
            align-content: center;
            gap: 0.625rem;
            flex-wrap: wrap;
            background: #FFF;
        }

        .cart {
            width: 3.125rem;
            height: 3.12513rem;
        }

    }
</style>