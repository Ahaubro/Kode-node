<script>
    import {notifications} from "../notifications.js"
	import Toast from "./Toast.svelte"
    import {clickOutside} from "../scripts/clickOutside.js"

    /*async function status() {
        const res = await fetch("/api/login");

        console.log(res.status)
    }*/

</script>



<h1 class="multicolortext">
    Velommen til KEAs online kiosk!
</h1>

<hr>


<h3 class="multicolortext">
    Gennemse vores produkter på siden "Produkter", eller læs mere om os på siden "Om os". 
</h3>

<div>
<img src="/images/home.jpg" alt="Welcome"/>
</div>



<style>
    h1{
        font-family: Comic Sans MS;
        font-size: 35px;
    }

    h3{
        font-family: Comic Sans MS;
        font-size: 20px;
    }

    .multicolortext {
        background-image: linear-gradient(to left, rgb(66, 11, 138), indigo, rgb(6, 223, 252), rgb(255, 0, 0), rgb(123, 255, 0), rgb(243, 14, 224), rgb(183, 0, 255));
        -webkit-background-clip: text;
        -moz-background-clip: text;
        background-clip: text;
        color: transparent;
        font-weight: 1500;
    }

    img{
        height: 400px;
        width: 600px;
    }
      
</style>