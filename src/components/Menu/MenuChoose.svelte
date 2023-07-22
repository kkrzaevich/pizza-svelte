<script>
    import ProductType from "./ProductType.svelte";
    let product1 = "Пицца";
    let product2 = "Напитки";    
    let product3 = "Закуски";
    let src1 = "./product-type1.jpg";
    let src2 = "./product-type2.jpg";
    let src3 = "./product-type3.jpg";    
</script>

<section>
    <div>
        <ProductType name={product1} src={src1} alt={product1}/>
        <ProductType name={product2} src={src2} alt={product2}/>
        <ProductType name={product3} src={src3} alt={product3}/>
    </div>
</section>

<style>
    section {
        display: flex;
        padding: 1.5625rem;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 0.625rem;
        background: var(--200, #FFCDA8);
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1.5625rem;
    }
</style>