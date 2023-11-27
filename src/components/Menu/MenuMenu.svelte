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

<style lang="scss">
    @use '../../styles' as *;

    div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 70px;
        align-self: stretch; 
    }

    @media screen and (max-width: $break-tablet) {
    }
        
    @media screen and (max-width: $break-mobile) {
        div {
            gap: 45px;
        }
    }  
</style>