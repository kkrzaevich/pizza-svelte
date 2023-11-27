<script>
    export let name = "Пицца";
    export let src = "/product-type1.jpg";
    export let href;
</script>

<a {href}>
    <div class="outer" style="background-image: url('{src}'); background-size: cover; background-repeat: no-repeat; background-color: black">
        <div class="inner" ></div>
    </div>
    <p>{name}</p>

</a>

<style lang="scss">
    @use '../../styles' as *;

    a {
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }

    .inner {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.2);
        border-radius: 10px;
    }

    .outer {
        width: 120px;
        height: 120px;

        display: block;
        border-radius: 10px;
        border: 2px solid $outline-clr;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    }

    p {
        color: #000;
        /* bigger */
        @include bigger($mobile: false);
    }

    a { 
        .outer { 
            .inner {
                transition-property: background-color;
                transition-duration: 0.35s;       
            }
        } 
    }

    a { 
        p {
            transition-property: font-weight;
            transition-duration: 0.35s;  
        }    
    }

    a:hover { 
        .outer { 
            .inner {
                background-color: rgba(0, 0, 0, 0); 
            } 
        }
    }

    a:hover { 
        p {
            font-weight: 700;
        }
    }

    @media screen and (max-width: $break-tablet) {
    }
        
    @media screen and (max-width: $break-mobile) {
        .outer {
            width: 90px;
            height: 90px;
        }  

        p {
            @include bigger($mobile: true);
        }
    }
</style>