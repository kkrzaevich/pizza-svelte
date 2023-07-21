<script>
    let src="public/logo.svg"
    let alt="Moa pizza logo"
</script>

<section>
    <img {src} {alt}>
    <div>
        <h1>МОА ПИЦЦА</h1>
        <p>Пиццерия №1 в Экибазтузе</p>
    </div>
</section>


<style>
    section {
        display: flex;
        align-items: center;
        gap: 1.9375rem;
    }

    img {
        width: 4.75rem;
        height: 4.3125rem;
        fill: var(--200, #FFCDA8);
        stroke-width: 1px;
        stroke: #000;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
    }

    h1 {
        width: 15.9375rem;
        height: 1.9375rem;
        color: #000;

        /* logo-main */
        font-family: Roboto;
        font-size: 2.25rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    p {
        width: 21.3125rem;
        height: 1.9375rem;
        color: #000;

        /* bigger-subtext */
        font-family: Roboto;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
    }
</style>