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
                <img src={product.product.imagePath} alt={product.product.name}>
                <h3>{product.product.name}</h3>
                <h3>{product.product.price} DKK</h3>
                <span>{product.amount}</span>
                
            </div>
        </div>

            
    {/each}
</div>

<style>

    img{
        height: 75px;
    }


</style>