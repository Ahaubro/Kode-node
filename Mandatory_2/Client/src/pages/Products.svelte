<script>
    import { onMount } from "svelte";
    import {basket} from "../store/basket.js";



    let products = [];

    onMount(async () => {
        const res = await fetch("/api/products");
        const { data:productsArr } = await res.json();
        products = productsArr;
    })

    // Function der tilføjer et produkt til min kurv
    function addProductToBasket(product) {

        basket.update( storeValue => {
            let foundProduct = storeValue.products.find(p => p.product.id == product.id)
            if(foundProduct) {
                foundProduct.amount ++
            } else {
                storeValue.products.push({product, amount:1});
            }
            console.log(storeValue.products)
            return storeValue;
        });
    }

</script>





<h1 class="multicolortext">Tilgængelige produkter</h1>




<div class="pos">
    {#each products as product}


        <div class="card">
            <div class="container">
                <img src={product.imagePath} alt={product.name}>
                <h3>{product.name}</h3>
                <h3>{product.price} DKK</h3>
                <p>{product.description} </p>
                <button on:click={ () => addProductToBasket(product)}>Tilføj til kurv</button>
            </div>
        </div>


        {:else}
            <p>Loading.....</p>
    {/each}
</div>





<style>
     h1{
        font-family: Comic Sans MS;
        font-size: 35px;
        color: rgb(30, 82, 224);
        font-weight: 1000;
    }

    .card{
        box-shadow: 0 4px 8px 0rgba(0,0,0,0.2);
        transition: 0.3s;
        border: 1px solid black;
        height: fit-content;
        display: inline-block;
    }

    .card:hover{
        box-shadow: 0 8px 16px 0rgba(0,0,0,0.2);
    }

    .container{
        padding: 20px 15px;
        width: 200px;
        height: fit-content;
    }

    .pos{
        text-align: center;
        display: flex;
        justify-content: center;
        height: fit-content;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        display: grid;
        grid-template-columns: repeat(5, 1fr);

    }

    img{
        height: 150px;
    }

    .multicolortext {
        background-image: linear-gradient(to left, rgb(138, 11, 132), rgb(63, 231, 253), rgba(123, 255, 0, 0.521), rgb(243, 14, 224), rgb(183, 0, 255));
        -webkit-background-clip: text;
        -moz-background-clip: text;
        background-clip: text;
        color: transparent;
    }


</style>