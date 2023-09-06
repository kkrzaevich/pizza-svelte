<script>
</script>

<hr />
<section class="footer">
    <p class="copyright">МОА ПИЦЦА © 2023 </p>
    <div class="social">
        <a href="https://www.instagram.com/" target="_blank"><img src="./social1.svg" alt="instagram icon"></a>
        <a href="https://www.whatsapp.com/" target="_blank"><img src="./social2.svg" alt="whatsapp icon"></a>
        <a href="https://www.telegram.com/" target="_blank"><img src="./social3.svg" alt="telegram icon"></a>
        <a href="https://www.vk.com/" target="_blank"><img src="./social4.svg" alt="vk icon"></a>
    </div>
    <div class="contacts">
        <h1>Тел. 0118 999 881 999 119 725 3</h1>
        <p>moapizza@yahoo.kz</p>
    </div>
</section>

<style>
    hr {
        border: 0.5px solid #E4A5FF;
        width: 100%;
    }

    img {
        width: 1.25rem;
        height: 1.25rem;
        flex-shrink: 0;
    }

    .footer {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        align-content: flex-start;
        row-gap: 1.25rem;
        align-self: stretch;
        flex-wrap: wrap;
    }

    .copyright {
        min-width: 25rem;
        flex: 1 0 0;

        color: #000;
        /* bigger */
        font-family: "Roboto", sans-serif;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .social {
        display: flex;
        min-width: 10.625rem;
        justify-content: center;
        align-items: center;
        gap: 1.5625rem;
    }

    img:hover {
        filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.495));
    }

    img {
        transition-property: filter;
        transition-duration: 0.35s;        
    }

    .contacts {
        display: flex;
        min-width: 25rem;
        padding-left: 0px;
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        gap: 0.4375rem;
        flex: 1 0 0;
    }

    .contacts > h1 {
        color: #000;
        /* medium-bold */
        font-family: "Roboto", sans-serif;
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }

    .contacts > p {
        color: #000;
        /* medium */
        font-family: "Roboto", sans-serif;
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    @media screen and (max-width: 1119px) {
        .contacts {
            padding-left: unset;
            align-items: flex-start;
        }
    }
        
    @media screen and (max-width: 699px) {
        .contacts {
            min-width: unset;
            width: 100%;
        }

        .social {
            min-width: unset;
            width: 100%;
            align-items: flex-start;
            justify-content: left;
        }

        .copyright {
            min-width: unset;
        }
    }  
</style>