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
        position: absolute;
        left: 50%;
        top: 30%;
        transform: translateX(-50%);

    }


</style>