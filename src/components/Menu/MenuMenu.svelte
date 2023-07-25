<script>
    import MenuSection from "./MenuSection.svelte";

    import MenuItem from "./MenuItem.svelte";
    import Menu from "./Menu.svelte";

    import { pizzaList } from "./ItemsList";
    import { drinkList } from "./ItemsList";
    import { snackList } from "./ItemsList";
</script>

<div>
    <MenuSection id="pizza" sectionName={"Пицца"} menuItems={pizzaList}/>
    <MenuSection id="drinks" sectionName={"Напитки"} menuItems={drinkList}/>
    <MenuSection id="snacks" sectionName={"Закуски"} menuItems={snackList}/>
</div>

<style>
    div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 4.375rem;
        align-self: stretch; 
    }
</style>