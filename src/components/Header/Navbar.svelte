<script>
    import NavbarItem from "./NavbarItem.svelte";
    let src = "/cart.svg"
    let alt="Cart icon"
</script>

<section>
    <div>
        <NavbarItem name={"Меню"}/>
        <NavbarItem name={"О нас"} state={"selected"}/>
        <NavbarItem name={"Контакты"}/>
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