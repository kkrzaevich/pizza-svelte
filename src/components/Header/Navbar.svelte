<script>
    import { fly } from 'svelte/transition';
    import NavbarItem from "./NavbarItem.svelte";
    import CartLink from './CartLink.svelte';
    $: outerWidth = 0

    $: hamburgerClicked = false;
    
    let src2 = "/hamburger.svg"
    let alt2="Menu icon"

    let currentPage="menu"

    $: pages = [
        [{name: "Меню", link: "menu", state: "selected"},
        {name: "О нас", link: "about", state: "default"},
        {name: "Контакты", link: "contacts", state: "default"}],
        [{name: "Корзина", link: "cart", state: "default"}]
    ]

    function deselectPages(event) {
        pages[0].forEach((page) => {
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
            {#each pages[0] as pageDetails}
                <NavbarItem on:selectedPage={deselectPages} bind:currentPage page={pageDetails}/>
            {/each}
        </div>
        <CartLink on:selectedPage={deselectPages} bind:currentPage page={pages[1][0]}/>
    {:else}
        {#if hamburgerClicked}
            <div class="overlay-container" in:fly={{ x: 200, duration: 500 }} out:fly={{ x: 200, duration: 500 }}>
                <div class="overlay-menu">
                    <button class="hamburger" on:click={() => {hamburgerClicked = false}}><img src={src2} alt={alt2}></button>
                    <div class="links">
                        {#each pages[0] as pageDetails}
                            <NavbarItem on:selectedPage={deselectPages} bind:currentPage page={pageDetails}/>
                        {/each}
                        <CartLink on:selectedPage={deselectPages} bind:currentPage page={pages[1][0]}/>
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
        gap: 32px;
    }

    section {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 32px;
    }

    @media screen and (max-width: 1119px) {

        .hamburger {
            width: 57.6px;
            height: 38.4px;
            display: flex;
        }

        .overlay-container {
            position: fixed;
            top: 0px;
            right: 0px;
            z-index: 2;

            display: flex;
            padding: 100px 80px;
            justify-content: flex-end;
            align-items: center;
            align-content: flex-start;
            gap: 10px;
            flex-wrap: wrap;
            background:  #FFE7CE;

            width: 50vw;
            height: 100vh;

            filter: drop-shadow(4px 0px 4px rgba(0, 0, 0, 0.25));
        }

        .overlay-menu {

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-end;
            gap: 100px;
            flex: 1 0 0;
        }

        .links {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-end;
            gap: 30px;
        }

    }

    @media screen and (max-width: 699px) {

        .hamburger {
            width: 40px;
            height: 30px;
            display: flex;
        }

        .overlay-container {
            position: fixed;
            top: 0px;
            right: 0px;
            z-index: 2;

            display: flex;
            padding: 45px 20px;
            justify-content: flex-end;
            align-items: center;
            align-content: flex-start;
            gap: 10px;
            flex-wrap: wrap;
            background:  #FFE7CE;

            width: 50vw;
            height: 100vh;

            filter: drop-shadow(4px 0px 4px rgba(0, 0, 0, 1));
        }

    }
</style>