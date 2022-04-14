<script>
    import {basket} from "../store/basket.js"

</script>


    
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
<br>

<!-- <button class="buy"> Køb nu </button> -->
        
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
        width: 50%;
    }

    .container{
        padding: 20px 15px;
        height: fit-content;
    }

    h1{
        font-family: Comic Sans MS;
        font-size: 35px;
        color: rgb(30, 82, 224);
        font-weight: 1000;
    } 

    .buy{
        background-color: burlywood;
        border-radius: 5px;
        padding: 10px;
        text-align: center;
        font-size: 20px;
    }

    .buy:hover{
        background-color: rgb(219, 136, 10);
        transition: 0.3s;
    }


</style>