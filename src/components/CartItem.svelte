<script>
    import { cart } from "./stores";
    import { selectedItem } from './stores';

    let localItem = {};
    let localCart = [];

    selectedItem.subscribe((item)=>{localItem = item})
    cart.subscribe((cart)=>{localCart = cart})

    export let item = {
        heading: "Супер пицца",
        description: "Самая вкусная в Казахстане",
        src: "./pizza1.png",
        price: 2500,
        ingredients: "вода, сахар, соль, рог единорога",
        weight: 750,
        amount: 1,
    }

    const increment = () => {
        if (item.amount <= 99) {
            const index = localCart.findIndex(object => (item.heading === object.heading))
            localCart[index].amount++;
            item.amount = localCart[index].amount;
            cart.update((cart) => localCart)
        }
    }

    const decrement = () => {
        if (item.amount >= 2) {
            const index = localCart.findIndex(object => (item.heading === object.heading))
            localCart[index].amount--;
            item.amount = localCart[index].amount;
            cart.update((cart) => localCart)
        }
    }

    const deleteItem = () => {
        const newCart = localCart.filter(object => {
            return object.heading !== item.heading;
        });
        cart.update((cart) => newCart)
    }
</script>

<section class="desktop">
    <img class="item-pic" src={item.src} alt="item pic">
    <div class="annotations">
        <h1>{item.heading}</h1>
        <p>{item.price} тг.</p>
    </div>
    <div class="delete">
        <button class="delete-button" on:click={deleteItem}><img class="delete-pic" src="/trash.svg" alt="delete item"></button>
        <div class="amount">
            <button on:click={decrement}><span class="amount-text">-</span></button>
            <p><span class="amount-text">{item.amount}</span></p>
            <button on:click={increment}><span class="amount-text">+</span></button>
        </div>
    </div>
</section>

<section class="mobile">
    <div class="image-container">
        <img class="item-pic" src={item.src} alt="item pic">
        <button class="delete-button" on:click={deleteItem}><img class="delete-pic" src="/trash.svg" alt="delete item"></button>
    </div>
    <div class="text-container">
        <div class="annotations">
            <h1>{item.heading}</h1>
            <p>{item.price} тг.</p>
        </div>
        <div class="delete">
            <div class="amount">
                <button on:click={decrement}><span class="amount-text">-</span></button>
                <p><span class="amount-text">{item.amount}</span></p>
                <button on:click={increment}><span class="amount-text">+</span></button>
            </div>
        </div>
    </div>
</section>

<style>
    .desktop {
        display: flex;
        padding: 25px;
        align-items: center;
        gap: 70px;
        border-radius: 20px;
        border: 1px solid rgba(0, 0, 0, 0.25);
        background: #FFF;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }

    .item-pic {
        width: 125px;
        height: 125px;
        flex-shrink: 0;
        border-radius: 100px;
        background: url(<path-to-image>), lightgray 50% / cover no-repeat;
        box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.25);
    }

    .annotations {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 20px;
        flex: 1 0 0;
    }

    h1 {
        align-self: stretch;
        color: var(--900, #000);
        /* bigger-bold */
        font-family: Roboto;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    p {
        align-self: stretch;
        color: var(--900, #000);
        /* bigger-italic */
        font-family: Roboto;
        font-size: 1.5rem;
        font-style: italic;
        font-weight: 200;
        line-height: normal;
    }

    .delete {
        display: flex;
        padding: 5px 0px;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;
        align-self: stretch;
    }

    .delete-pic {
        width: 36px;
        height: 36px;
    }

    .amount {
        display: flex;
        padding: 10px 15px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border-radius: 10px;
        background: #FFF;
        box-shadow: 0px 5px 9px -1px rgba(0, 0, 0, 0.05) inset;
    }

    .amount-text {
        color: var(--900, #000);
        text-align: center;
        /* bigger-bold */
        font-family: Roboto;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    .mobile {
        display: none;
    }

    @media screen and (max-width: 1119px) {

    }
        
    @media screen and (max-width: 699px) {
        .desktop {
            display: none;
        }

        .mobile {
            display: flex;
            padding: 25px;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            gap: 30px;
            align-self: stretch;
            border-radius: 20px;
            border: 1px solid rgba(0, 0, 0, 0.25);
            background: #FFF;
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        }

        .image-container {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            align-self: stretch;
        }

        .text-container {
            display: flex;
            align-items: flex-end;
            gap: 20px;
            align-self: stretch;
        }

        h1 {
            font-size: 1.25rem;
        }

        p {
            font-size: 1rem;
        }

        .amount-text {
            font-size: 1.25rem;
        }
    }  
</style>