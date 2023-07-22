<script>
    export let name = "Пицца";
    export let src = "/product-type1.svg";
    export let alt = "Пицца";
</script>

<section>
    <img {src} {alt}>
    <p>{name}</p>
</section>

<style>
    section {
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 0.625rem;
    }

    img {
        width: 7.5rem;
        height: 7.5rem;

        border-radius: 0.625rem;
        border: 2px solid var(--900, #000);
        background: url(<path-to-image>), lightgray 50% / cover no-repeat, var(--900, #000);
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
</style>