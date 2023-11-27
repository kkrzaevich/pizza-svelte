<script>
    import { fade } from 'svelte/transition';
    import { fly } from 'svelte/transition';
</script>

<section in:fly={{ x: 200, duration: 1000 }} out:fade>
        <h1>Мы работаем над этим :(</h1>
        <img src="/workInProgress.PNG" alt="sad dog">
</section>

<style lang="scss">
    @use '../styles' as *;

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
        @include logo-main($mobile: false);
    }

    img {
        height: 500px;
        filter: grayscale(100%);
    }

    @media screen and (max-width: $break-tablet) {

    }
        
    @media screen and (max-width: $break-mobile) {
        section {
            gap: 2.8125rem;
        }

        h1 {
            @include logo-main($mobile: true);
        }
    }  

</style>