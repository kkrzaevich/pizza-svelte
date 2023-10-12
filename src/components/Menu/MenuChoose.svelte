<script>
    import ProductType from "./ProductType.svelte";
    let product1 = {
        name: "Пицца",
        src: "./product-type1.jpg",
        href: "#pizza",
    }
    let product2 = {
        name: "Напитки",
        src: "./product-type2.jpg",
        href: "#drinks",
    }
    let product3 = {
        name: "Закуски",
        src: "./product-type3.jpg",
        href: "#snacks",
    }
  
</script>

<section>
    <div>
        <ProductType name={product1.name} src={product1.src} href={product1.href}/>
        <ProductType name={product2.name} src={product2.src} href={product2.href}/>
        <ProductType name={product3.name} src={product3.src} href={product3.href}/>
    </div>
</section>

<style>
    section {
        display: flex;
        padding: 25px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        background: var(--200, #FFCDA8);
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 25px;
    }

    @media screen and (max-width: 1119px) {
    }
        
    @media screen and (max-width: 699px) {
        section {
            padding: 10px;
        }

        div {
            gap: 15px;
        }
    }  
</style>