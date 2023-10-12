<script>
    let src="/logo.svg"
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
        gap: 31px;
    }
    


    img {
        width: 76px;
        height: 69px;
        fill: var(--200, #FFCDA8);
        stroke-width: 1px;
        stroke: #000;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 16px;
    }

    h1 {
        width: 255px;
        height: 31px;
        color: #000;

        /* logo-main */
        font-family: "Roboto", sans-serif;
        font-size: 2.25rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    p {
        width: 341px;
        height: 31px;
        color: #000;

        /* bigger-subtext */
        font-family: "Roboto", sans-serif;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
    }

    @media screen and (max-width: 1119px) {
    } 

    @media screen and (max-width: 699px) {
        img {
            width: 2.77175rem;
            height: 2.5rem;
        }

        p {
            display: none;
        }

        h1 {
            font-family: Roboto;
            font-size: 1.5rem;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
        }
    }
</style>