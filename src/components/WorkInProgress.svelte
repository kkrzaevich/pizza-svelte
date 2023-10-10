<script>
    import { fade } from 'svelte/transition';
    import { fly } from 'svelte/transition';
</script>

<section in:fly={{ x: 200, duration: 1000 }} out:fade>
        <h1>Мы работаем над этим :(</h1>
        <img src="/workInProgress.PNG" alt="sad dog">
</section>

<style>
    section {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 4.375rem;
        align-self: stretch;
    }

    h1 {
        color: #000;
        /* logo-main */
        font-family: Roboto;
        font-size: 2.25rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    img {
        height: 500px;
        filter: grayscale(100%);
    }

    @media screen and (max-width: 1119px) {

    }
        
    @media screen and (max-width: 699px) {
        section {
            gap: 2.8125rem;
        }

        h1 {
            font-size: 1.5rem;
        }
    }  

</style>