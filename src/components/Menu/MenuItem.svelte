<script>
    export let heading="Маргарита";
    export let description="Самая вкусная пицца";
    export let src="./pizza1.png";
</script>

<section>
    <div class="img-container">
        <img {src} alt={heading}>
    </div>

    <div class="description">
        <h1>{heading}</h1>
        <p>{description}</p>
        <button><span>Выбрать</span></button>
    </div>
</section>

<style>
    .img-container {
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
        height: 15.0625rem;
        min-width: 25.875rem;
        max-width: 25.875rem;
        align-items: center;
        gap: 2rem;
        flex-shrink: 0;
    }

    .description {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        gap: 1rem;
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
        width: 14.5rem;
        height: 6.25rem;
        color: #000;
        /* small */
        font-family: "Roboto", sans-serif;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    button {
        display: flex;
        padding: 0.625rem 0.9375rem;
        justify-content: center;
        align-items: center;
        gap: 0.625rem;
        border-radius: 0.625rem;
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
</style>