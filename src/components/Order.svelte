<script>
    import { fade } from 'svelte/transition';
    import { fly } from 'svelte/transition';
    import { cart } from "./stores";
    import { thepage } from './stores';

    $: maxlength = 12;
    $: cols = 50;

    $: outerWidth = 0;
    $: if (outerWidth > 1150) {
        maxlength = 12;
        cols = 50;
    } else {
        maxlength = 50;
        cols = 200;
    }


    const telPattern = "\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}"
    let localCart = [];
    let sum = 0;

    const userData = ['','','','']
    let display = "none";

    cart.subscribe((cart) => {
        localCart = cart;
        sum = 0;
        for (const cartItem of localCart) {
            sum += cartItem.price * cartItem.amount;
        }
    })
    
    let nextPage = {
        name: "Мы работаем над этим :(",
        link: "work-in-progress",
        state: "default"
    }

    function goToNextPage() {
        let empty = false;
        for (const element of userData) {
            if (element === '') {empty = true}
        }
        if (!empty) {
            thepage.update((val)=>{return nextPage});
        } else {
            display = "block";
        }

    }
</script>

<svelte:window bind:outerWidth />

<section in:fly={{ x: 200, duration: 1000 }} out:fade>
    <h1>Оформление заказа</h1>
    <div class="main-content">
        <div class="main-cost-mobile">
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
        <div class="main-data">
            <div class="customer-information">
                <h2>Данные получателя</h2>
                <div class="customer-container">
                    <div class="customer-line">
                        <p>Имя</p>
                        <input type="text" placeholder="Алихан" bind:value={userData[0]} >
                    </div>
                    <div class="customer-line">
                        <p>Номер телефона</p>
                        <input type="tel" placeholder="+79991112233" pattern="{telPattern}" maxlength="{maxlength}" bind:value={userData[1]} >
                    </div>
                    <div class="customer-line">
                        <p>Адрес</p>
                        <textarea rows="2" cols="{cols}" style="resize: none;" placeholder="Экибастуз, ул. Машхур Жусупа, 45, кв. 11" bind:value={userData[2]} ></textarea>
                    </div>
                </div>
            </div>
            <div class="pay-information">
                <h2>Способ оплаты</h2>
                <div class="pay-radio">
                    <input type="radio" class="pay-button" id="payChoice1" name="pay" value="online" bind:group={userData[3]}/>
                    <label class="pay-label" for="payChoice1">Картой онлайн</label>
                </div>
                <div class="pay-radio">
                    <input type="radio" class="pay-button" id="payChoice2" name="pay" value="card"  bind:group={userData[3]}/>
                    <label class="pay-label" for="payChoice2">Картой при получении</label>
                </div>
                <div class="pay-radio">
                    <input type="radio" class="pay-button" id="payChoice3" name="pay" value="cash"  bind:group={userData[3]}/>
                    <label class="pay-label" for="payChoice3">Наличными при получении</label>
                </div>
            </div>
            <button class="order-button" on:click={goToNextPage}><p>Оформить заказ</p></button>
        </div>
        <div class="main-cost-desktop">
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
    <p class="error-text" style="display: {display}" in:fade out:fade>Заполните все поля</p>
</section>

<style lang="scss">
    @use '../styles' as *;

    section {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 45px;
        align-self: stretch;
    }

    h1 {
        color: $outline-clr;
        /* logo-main */
        @include logo-main($mobile: false);
    }

    h2 {
        color: $outline-clr;
        /* bigger-bold */
        @include bigger-bold($mobile: false);
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

    .main-cost-desktop {
        display: flex;
        padding: 35px;
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;
        align-self: stretch;
        border-radius: 20px;
        border: 1px solid rgba(0, 0, 0, 0.20);
        background: $fill1-clr;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }

    .main-cost-mobile {
        display: none;
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
        background: $bg-clr;
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
        background: $bg-clr;
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
        background: $fill2-clr;
        box-shadow: 0px 5px 9px -1px rgba(0, 0, 0, 0.25);
    }

    .order-button { 
        p {
            color: $outline-clr;
            text-align: center;
            /* bigger-bold */
            font-family: Roboto;
            font-size: 1.5rem;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
        }
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

    .customer-line {
        p {
            width: 100px;
            min-width: 100px;
            color: $outline-clr;
            /* medium */
            @include medium($mobile: false);
        }

        input {
            height: 25px;
            flex: 1 0 0;
            border-radius: 10px;
            border: none;
            background: #FFF;
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
            padding: 0.5rem 0.5rem 0.5rem 0.5rem;
            box-sizing: content-box;

            color: $outline-clr;
            /* medium */
            @include medium($mobile: false);
            font-weight: 300;

            outline: none;
        }

        textarea {
            width: 100%;
            box-sizing: content-box;
            border: none;
            border-radius: 10px;
            background: #FFF;
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset;
            padding: 0.5rem 0.5rem 0.5rem 0.5rem;

            color: $outline-clr;
            /* medium */
            @include medium($mobile: false);
            font-weight: 300;

            outline: none;
        }
    } 

    .pay-radio {
        display: flex;
        align-items: center;
        gap: 35px;
    }

    .pay-button {
        color: $outline-clr;
        /* medium */
        @include medium($mobile: false);

        appearance: none;

        border-radius: 50%;
        width: 16px;
        height: 16px;

        border: 2px solid #999;
        transition: 0.2s all linear;
        margin-right: 5px;
    }

    .pay-button:checked {
        border: 6px solid $outline-clr;
    }

    .pay-label {
        color: $outline-clr;
        /* medium */
        @include medium($mobile: false);
    }

    .cost-line, .total-line {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        align-self: stretch;
        min-width: 225px;
    }

    .cost-line { 
        p {
            color: $outline-clr;
            /* medium */
            @include medium($mobile: false);

            max-width: 150px;
        }
    }

    .total-line { 
        p {
            color: $outline-clr;
            /* medium-bold */
            @include medium-bold($mobile: false);
        }
    }

    .error-text {
        color: red;
        /* medium */
        @include medium($mobile: false);
        display: none;
    }

    @media screen and (max-width: $break-tablet) {
        .main-cost-desktop {
            display: none;
        }

        .main-cost-mobile {
            display: flex;
            padding: 35px;
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
            align-self: stretch;
            border-radius: 20px;
            border: 1px solid rgba(0, 0, 0, 0.20);
            background: $fill1-clr;
            box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        }

        .main-content {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: 45px;
            align-self: stretch;
        }

        .cost-line { 
            p {
                max-width: unset;
            }
        }
    }
        
    @media screen and (max-width: $break-mobile) {
        h1 {
            color: $outline-clr;
            /* bigger-bold */
            @include bigger-bold($mobile: false)
        }

        h2 {
            @include bigger-bold($mobile: true)
        }

        * {
            min-width: none;
        }
    } 
</style>
