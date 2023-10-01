<script>
    import { fade } from 'svelte/transition';
    import { fly } from 'svelte/transition';
    import { cart } from "./stores";
    import { selectedItem } from './stores';
    import { thepage } from './stores';
    import CartItem from './CartItem.svelte';

    const telPattern = "\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"
    let localCart = [];
    let sum = 0;

    cart.subscribe((cart) => {
        localCart = cart;
        sum = 0;
        for (const cartItem of localCart) {
            sum += cartItem.price * cartItem.amount;
        }
    })
    
    import { onMount } from 'svelte';
</script>

<section in:fly={{ x: 200, duration: 1000 }} out:fade>
    <h1>Оформление заказа</h1>
    <div class="main-content">
        <div class="main-data">
            <div class="customer-information">
                <h2>Данные получателя</h2>
                <div class="customer-container">
                    <div class="customer-line">
                        <p>Имя</p>
                        <input type="text" placeholder="Алихан">
                    </div>
                    <div class="customer-line">
                        <p>Номер телефона</p>
                        <input type="tel" placeholder="+79991112233" pattern="{telPattern}" maxlength="12">
                    </div>
                    <div class="customer-line">
                        <p>Адрес</p>
                        <textarea rows="2" cols="50" style="resize: none;" placeholder="Экибастуз, ул. Машхур Жусупа, 45, кв. 11"></textarea>
                    </div>
                </div>
            </div>
            <div class="pay-information">
                <h2>Способ оплаты</h2>
                <div class="pay-radio">
                    <input type="radio" class="pay-button" id="payChoice1" name="pay" value="online" />
                    <label class="pay-label" for="payChoice1">Картой онлайн</label>
                </div>
                <div class="pay-radio">
                    <input type="radio" class="pay-button" id="payChoice2" name="pay" value="card" />
                    <label class="pay-label" for="payChoice2">Картой при получении</label>
                </div>
                <div class="pay-radio">
                    <input type="radio" class="pay-button" id="payChoice3" name="pay" value="cash" />
                    <label class="pay-label" for="payChoice3">Наличными при получении</label>
                </div>
            </div>
            <button class="order-button"><p>Оформить заказ</p></button>
        </div>
        <div class="main-cost">
            <h2>Заказ</h2>
            {#each localCart as item}
                <div class="cost-line">
                    <p>{item.amount} x {item.heading}</p>
                    <p>{item.price} тг</p>
                </div>
            {/each}
            <div class="total-line">
                <p>Итого:</p>
                <p>{sum} тг</p>
            </div>
        </div>
    </div>
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 45px;
        align-self: stretch;
    }

    h1 {
        color: var(--900, #000);
        /* logo-main */
        font-family: Roboto;
        font-size: 36px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    h2 {
        color: var(--900, #000);
        /* bigger-bold */
        font-family: Roboto;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    .main-content {
        display: flex;
        align-items: flex-start;
        gap: 35px;
        align-self: stretch;
    }

    .main-data {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 45px;
        flex: 1 0 0;
    }

    .main-cost {
        display: flex;
        padding: 35px;
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;
        align-self: stretch;
        border-radius: 20px;
        border: 1px solid rgba(0, 0, 0, 0.20);
        background: var(--100, #FFE7CE);
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }

    .customer-information {
        display: flex;
        padding: 35px;
        flex-direction: column;
        align-items: flex-start;
        gap: 35px;
        align-self: stretch;
        border-radius: 20px;
        border: 1px solid rgba(0, 0, 0, 0.20);
        background: #FFF;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }

    .pay-information {
        display: flex;
        padding: 35px;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 15px;
        align-self: stretch;
        border-radius: 20px;
        border: 1px solid rgba(0, 0, 0, 0.20);
        background: #FFF;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }

    .order-button {
        display: flex;
        padding: 20px 25px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        align-self: stretch;
        border-radius: 10px;
        background: var(--200, #FFCDA8);
        box-shadow: 0px 5px 9px -1px rgba(0, 0, 0, 0.25);
    }

    .order-button > p {
        color: var(--900, #000);
        text-align: center;
        /* bigger-bold */
        font-family: Roboto;
        font-size: 24px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    .customer-container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
        align-self: stretch;
    }

    .customer-line {
        display: flex;
        align-items: flex-start;
        gap: 35px;
        align-self: stretch;
    }

    .customer-line > p {
        width: 100px;
        min-width: 100px;
        color: var(--900, #000);
        /* medium */
        font-family: Roboto;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        padding-top: 0.5rem;
    }

    .customer-line > input {
        height: 25px;
        flex: 1 0 0;
        border-radius: 10px;
        border: none;
        background: #FFF;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
        padding: 0.5rem 0.5rem 0.5rem 0.5rem;
        box-sizing: content-box;

        color: var(--900, #000);
        /* medium */
        font-family: Roboto;
        font-size: 20px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;

        outline: none;
    }

    .customer-line > textarea {
        width: 100%;
        box-sizing: content-box;
        border: none;
        border-radius: 10px;
        background: #FFF;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
        padding: 0.5rem 0.5rem 0.5rem 0.5rem;

        color: var(--900, #000);
        /* medium */
        font-family: Roboto;
        font-size: 20px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;

        outline: none;
    }

    .pay-radio {
        display: flex;
        align-items: center;
        gap: 35px;
    }

    .pay-button {
        color: var(--900, #000);
        /* medium */
        font-family: Roboto;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;

        appearance: none;

        border-radius: 50%;
        width: 16px;
        height: 16px;

        border: 2px solid #999;
        transition: 0.2s all linear;
        margin-right: 5px;
    }

    .pay-button:checked {
        border: 6px solid var(--900, #000);
    }

    .pay-label {
        color: var(--900, #000);
        /* medium */
        font-family: Roboto;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .cost-line, .total-line {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        align-self: stretch;
        min-width: 225px;
    }

    .cost-line > p {
        color: var(--900, #000);
        /* medium */
        font-family: Roboto;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;

        max-width: 150px;
    }

    .total-line > p {
        color: var(--900, #000);
        /* medium-bold */
        font-family: Roboto;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
</style>
