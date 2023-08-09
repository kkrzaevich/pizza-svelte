<script>
    import NavbarItem from "./NavbarItem.svelte";
    let src = "/cart.svg"
    let alt="Cart icon"

    export let currentPage="menu"
</script>

<section>
    <div>
        <NavbarItem bind:currentPage page={{name: "Меню", link: "menu"}}/>
        <NavbarItem bind:currentPage page={{name: "О нас", link: "about"}} state={"selected"}/>
        <NavbarItem bind:currentPage page={{name: "Контакты", link: "contacts"}}/>
    </div>
    <button><img {src} {alt}></button>
</section>

<style>
    img:hover {
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.20));
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