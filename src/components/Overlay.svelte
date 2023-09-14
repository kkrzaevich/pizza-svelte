<script>
    import { selectedItem } from "./stores";
    import { displayOverlay } from "./stores";
    import { cart } from "./stores";

    let localItem = {};
    let localCart = [];
    let amount = 1;

    selectedItem.subscribe((item)=>{localItem = item})
    cart.subscribe((cart)=>{localCart = cart})

    const increment = () => {
        if (localItem.amount <= 99) {
            localItem.amount++;
            selectedItem.update((val) => localItem)
        }
    }

    const decrement = () => {
        if (localItem.amount >= 2) {
            localItem.amount--;
            selectedItem.update((val) => localItem)
        }
    }

    const add = () => {
        localCart.push(localItem)
        displayOverlay.update((val) => false)
        cart.update((cart) => localCart)
    }
</script>

<section>

    <div class="picture">
        <div class="img-container">
            <img src={localItem.src} alt={localItem.heading}>
        </div>
    </div>
    <div class="annotations">
        <div class="heading">
            <h1>{localItem.heading}</h1>
            <button class="close" on:click={()=>{displayOverlay.update((val) => false)}}>
                <img class="close-img" src="./close.svg" alt="close the window">
            </button>
        </div>
        <p class="price">{localItem.price} тг. {localItem.weight} г.</p>
        <p class="description">{localItem.description}</p>
        <p class="ingredients"><span class="ingredients-title">Состав:</span> {localItem.ingredients}</p>
        <div class="add">
            <div class="amount">
                <button on:click={decrement}><span class="amount-text">-</span></button>
                <p><span class="amount-text">{localItem.amount}</span></p>
                <button on:click={increment}><span class="amount-text">+</span></button>
            </div>
            <button class="add-button" on:click={add}><span class="add-text">В корзину</span></button>
        </div>
    </div>
</section>

<style>
    section {
        display: flex;
        align-items: center;
        border-radius: 3.75rem;
        background: var(--100, #FFE7CE);

        max-width: 700px;
        min-width: 620px;

        box-shadow: 0px 0px 27px 0px rgba(0, 0, 0, 0.25);

        transition: height 1s;


    }

    .picture {
        display: flex;
        align-items: center;
        gap: 0.625rem;
        align-self: stretch;
        box-shadow: 0px 0px 27px 0px rgba(0, 0, 0, 0.25);

        width: 17.5rem;
        flex-direction: column;
        justify-content: center;
        gap: 0.625rem;

        border-radius: 3.75rem;
        background: var(--200, #FFCDA8);
    }

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

    .annotations {
        display: flex;
        padding: 2.5rem 3.75rem;
        flex-direction: column;
        align-items: flex-start;
        align-content: space-between;
        gap: 1.875rem;
        flex: 1 0 0;
    }

    h1 {
        align-self: stretch;
        color: var(--900, #000);
        text-align: left;
        /* bigger-bold */
        font-family: Roboto;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    .price {
        align-self: stretch;
        color: var(--900, #000);
        text-align: justify;
        /* small-light */
        font-family: Roboto;
        font-size: 1rem;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
    }

    .description {
        align-self: stretch;
        color: var(--900, #000);
        text-align: justify;
        /* small */
        font-family: Roboto;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .ingredients {
        color: var(--900, #000);
        /* small-italic */
        font-family: Roboto;
        font-size: 1rem;
        font-style: italic;
        font-weight: 200;
        line-height: normal;
    }

    .ingredients-title {
        color: var(--900, #000);
        text-align: justify;
        /* small-bold-italic */
        font-family: Roboto;
        font-size: 1rem;
        font-style: italic;
        font-weight: 400;
        line-height: normal;
    }

    .add {
        display: flex;
        justify-content: space-between;
        align-items: center;
        align-self: stretch;
    }

    .add-button {
        display: flex;
        padding: 0.625rem 0.9375rem;
        justify-content: center;
        align-items: center;
        gap: 0.625rem;
        border-radius: 0.625rem;
        background: var(--200, #FFCDA8);
        box-shadow: 0px 5px 9px -1px rgba(0, 0, 0, 0.25);

        transition-property: filter, background-color;
        transition-duration: 0.35s;  
    }

    .add-button:hover {
        background-color: var(--400, #E4A5FF);
        filter: drop-shadow(0px 6px 12px rgba(126, 126, 126, 0.5));
    }

    .add-text {
        color: #000;
        text-align: center;

        font-family: Roboto;
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    button .amount-text:hover {
        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.20);
    }

    .amount-text {
        color: var(--900, #000);
        text-align: center;
        /* small-bold */
        font-family: Roboto;
        font-size: 1rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;

        transition-property: text-shadow;
        transition-duration: 0.35s;
    }

    .amount {
        display: flex;
        padding: 0.625rem 0.9375rem;
        justify-content: center;
        align-items: center;
        gap: 0.625rem;
        border-radius: 0.625rem;
        background: #FFF;
        box-shadow: 0px 5px 9px -1px rgba(0, 0, 0, 0.05) inset;
    }

    .heading {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        align-self: stretch;
        align-items: center;
    }

    .close-img {
        width: 20px;
        transition: filter 0.25s;
    }

    .close-img:hover {
        filter: drop-shadow(2px 4px 4px rgba(0, 0, 0, 1));
    }

    @media screen and (max-width: 1119px) {
        
    }
        
    @media screen and (max-width: 699px) {
        section {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            border-radius: 3.75rem;
            background: var(--100, #FFE7CE);
            min-width: 300px;
        }

        .picture {
            min-height: 15.625rem;
            flex: 1 0 0;
            align-self: stretch;
            border-radius: 3.75rem;
            background: var(--200, #FFCDA8);
            width: unset;
        }

        .annotations {
            display: flex;
            padding: 2.5rem 2rem;
            flex-direction: column;
            align-items: flex-start;
            align-content: space-between;
            gap: 1.875rem;
            align-self: stretch;
        }
    }  
</style>