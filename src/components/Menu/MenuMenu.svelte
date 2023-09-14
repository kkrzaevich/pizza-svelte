<script>
    import MenuSection from "./MenuSection.svelte";

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

    @media screen and (max-width: 1119px) {
    }
        
    @media screen and (max-width: 699px) {
        div {
            gap: 2.8125rem;
        }
    }  
</style>