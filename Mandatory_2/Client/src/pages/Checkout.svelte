<script>
    import {basket} from "../store/basket.js"
</script>


<h1>Din kurv</h1>



<div id="kurv">
    <p></p>
</div>


<div class="pos">
    {#each $basket.products as product}


        <div class="card">
            <div class="container">
                <h3>Indkøbskurv</h3>
                <img src={product.product.imagePath} alt={product.product.name}>
                <h3> {product.product.name}</h3>
                <hr>
                <h3>Pris: {product.product.price} DKK</h3>
                <hr>
                <span>Antal: {product.amount}</span>
                
            </div>
        </div>

            
    {/each}
        
</div>


<style>

    img{
        height: 85px;
    }

    .card{
        border: 1px solid black;
        width: 25%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: row;

    }

    .pos{
        text-align: center;
        display: flex;
        justify-content: center;
        height: fit-content;
        width: fit-content;
        position: absolute;
        left: 50%;
        top: 40%;
        transform: translateX(-50%);
        width: 100%;
    }

    .container{
        padding: 20px 15px;
        height: fit-content;
    }


</style>