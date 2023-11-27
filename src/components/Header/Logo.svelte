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


<style lang="scss">
    @use '../../styles' as *;

    section {
        display: flex;
        align-items: center;
        gap: 31px;
    }
    


    img {
        width: 76px;
        height: 69px;
        fill: $fill2-clr;
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
        @include logo-main($mobile: false);
    }

    p {
        width: 341px;
        height: 31px;
        color: #000;

        /* bigger-subtext */
        @include bigger-subtext($mobile: false);
    }

    @media screen and (max-width: $break-tablet) {
    } 

    @media screen and (max-width: $break-mobile) {
        img {
            width: 2.77175rem;
            height: 2.5rem;
        }

        p {
            display: none;
        }

        h1 {
            @include logo-main($mobile: true);
        }
    }
</style>