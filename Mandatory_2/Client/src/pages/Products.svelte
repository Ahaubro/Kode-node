<script>
    import { onMount } from "svelte";
    import {basket} from "../store/basket.js";
    import {notifications} from "../notifications.js"
    import Toast from "./Toast.svelte"



    let products = [];

    // Fetcher produkter fra min server
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
        notifications.success("Produktet er blev tilføjet til kurven");
    }

</script>





<h1 class="multicolortext">Tilgængelige produkter</h1>

<hr>

<Toast/>

<!-- Cards der viser mine produkter ved hjælp af et each loop-->
<div class="pos">
    {#each products as product}


        <div class="card">
            <div class="container">
                <img src={product.imagePath} alt={product.name}>
                <h3>{product.name}</h3>
                <h3>{product.price} DKK</h3>
                <p>{product.description} </p>
                <button id="addBtn" on:click={ () => addProductToBasket(product)}>Tilføj til kurv</button>
            </div>
        </div>


        {:else}
            <p>Loading.....</p>
    {/each}
</div>
<!-- Cards slutter her-->


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
        height: 50.5%;
        position: absolute;
        left: 50%;
        top: 40%;
        transform: translateX(-50%);
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        overflow-y: scroll;
        
    }

    img{
        height: 100px;
    }

    .multicolortext {
        background-image: linear-gradient(to left, rgb(138, 11, 132), rgba(7, 160, 180, 0.836), rgba(123, 255, 0, 0.521), rgb(243, 14, 224), rgb(183, 0, 255));
        -webkit-background-clip: text;
        -moz-background-clip: text;
        background-clip: text;
        color: transparent;
    }

    #addBtn{
        background-color: rgb(91, 196, 231);
        border-radius: 5px;
        padding: 6px;
        text-align: center;
        color: antiquewhite;
    }

    #addBtn:hover{
        background-color: rgba(32, 116, 226, 0.753);
        transition: 0.3s;
    }


</style>