<script>
    export let name = "Пицца";
    export let src = "/product-type1.jpg";
    export let alt = "Пицца";
</script>

<a>
    <div class="outer" style="background-image: url('{src}'); background-size: cover; background-repeat: no-repeat; background-color: black">
        <div class="inner" ></div>
    </div>
    <p>{name}</p>
</a>

<style>
    a {
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.625rem;
    }

    .inner {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.2);
        border-radius: 0.625rem;
    }

    .outer {
        width: 7.5rem;
        height: 7.5rem;

        display: block;
        border-radius: 0.625rem;
        border: 2px solid var(--900, #000);
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }

    p {
        color: #000;
        /* bigger */
        font-family: Roboto;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    a:hover > .outer > .inner {
        background-color: rgba(0, 0, 0, 0); 
    }

    a:hover p {
        font-weight: 700;
    }
</style>