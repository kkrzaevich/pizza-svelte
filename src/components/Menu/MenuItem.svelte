<script>
    import { displayOverlay } from "../stores";
    import { selectedItem } from "../stores";

    export let heading="Маргарита";
    export let description="Самая вкусная пицца";
    export let price=2500;
    export let weight=750;
    export let ingredients="вода, сахар, соль, рог единорога";
    export let src="./pizza1.png";


    function setItem() {
        return {
            heading: heading,
            description: description,
            src: src,
            price: price,
            ingredients: ingredients,
            weight: weight,
            amount: 1,
        };
    }
</script>

<section>
    <div class="img-container">
        <img {src} alt={heading}>
    </div>

    <div class="description">
        <h1>{heading}</h1>
        <p>{description}</p>
        <p class="price">{price} тг. {weight} г.</p>
        <button on:click={()=>{displayOverlay.update((val) => true); selectedItem.update((val) => setItem())}}><span>Выбрать</span></button>
    </div>
</section>

<style>
    .img-container {
        min-width: 150px;
        width: 150px;
        height: 150px;
        display: flex;
        justify-content: center;
    }

    img {
        max-width: 150px;
        max-height: 150px;
        filter: drop-shadow(0px 5px 25px rgba(0, 0, 0, 0.25));
    }

    section {
        display: inline-flex;
        height: 241px;
        min-width: 414px;
        max-width: 414px;
        align-items: center;
        gap: 32px;
        flex-shrink: 0;
    }

    .description {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 16px;
        align-self: stretch;
    }

    h1 {
        align-self: stretch;

        color: #000;
        /* medium-bold */
        font-family: Roboto;
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    p {
        width: 232px;
        height: 100px;
        color: #000;
        /* small */
        font-family: "Roboto", sans-serif;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .price {
        /* font-style: italic; */
        font-weight: 300;
        font-style: italic;
        height: unset;
        opacity: 0.7;
    }

    button {
        display: flex;
        padding: 10px 15px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border-radius: 10px;
        background: var(--200, #FFCDA8);
        box-shadow: 0px 5px 9px -1px rgba(0, 0, 0, 0.25);
    }

    span {
        color: #000;
        text-align: center;

        font-family: Roboto;
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    button {
        transition-property: filter, background-color;
        transition-duration: 0.35s;        
    }
    
    button:hover {
        background-color: var(--400, #E4A5FF);
        filter: drop-shadow(0px 12px 25px rgba(126, 126, 126, 0.5));
    }

    @media screen and (max-width: 1119px) {
    }
        
    @media screen and (max-width: 699px) {
        section {
            min-width: 320px;
            max-width: 320px;
            height: auto;
        }

        .img-container {
            min-width: 125px;
            width: 125px;
            height: 125px;
        }

        img {
            max-width: 125px;
            max-height: 125px;
        }

        p {
            height: auto;
            width: auto;
        }
    }  
</style>