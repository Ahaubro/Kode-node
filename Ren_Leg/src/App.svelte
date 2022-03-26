<script>
	import {Router, Link, Route} from "svelte-navigator"
	import About from "./pages/About.svelte"
	import Admin from "./pages/Admin.svelte";
	import Checkout from "./pages/Checkout.svelte";
	import Home from "./pages/Home.svelte"
	import Products from "./pages/Products.svelte";

	
	
</script>

<main>
	<img src="/images/baggrund.jpg" alt="background">

	<h1 class="multicolortext">KEAs online kiosk - Køb nu og få op til 20% rabat </h1>




	<Router>

		<nav>
			<ul>
				<div class="link-wrapper">
					<li><Link to="/" > Home </Link></li> 
				</div>

				<div class="link-wrapper">
					<li><Link to="/products" > Produkter </Link></li>
				</div>
				
				<div class="link-wrapper">
					<li><Link to="/about" > Om os </Link></li>
				</div>

				<div class="link-wrapper">
					<li><Link to="/admin" > Admin side </Link></li>
				</div>

				<div class="link-wrapper">
					<li><Link to="/checkout" > Kurv </Link></li>
				</div>
				
			</ul>
		</nav>

		<Route path="/about" component={About}></Route>
		<Route path="/" component={Home}></Route>
		<Route path="/products" component={Products}></Route>
		<Route path="/admin" component={Admin}></Route>
		<Route path="/checkout" component={Checkout}></Route>

		


	</Router>




</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #008cff;
		text-transform: uppercase;
		font-size: 3em;
		font-weight: 1000;
		font-family: Comic Sans MS;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	ul {
    	list-style-type: none;
    	margin: 0;
    	overflow: hidden;
    	background-color: rgb(22, 187, 238);
    	width: 100%
	}

	li{
		float: left;
	}

	.link-wrapper > :global(a) {
		text-decoration: none;
	}

	:global(a){
		display: block;
		font-family: Comic Sans MS;
		padding: 18px 55px;
		text-decoration: none;
		font-weight: 1000;
	}

	:global(a:hover:not(.active)){
		background-color: rgb(42, 122, 243);
	}

	.multicolortext {
        background-image: linear-gradient(to left, rgb(66, 11, 138), indigo, rgb(6, 223, 252), rgb(255, 0, 0), rgb(123, 255, 0), rgb(243, 14, 224), rgb(183, 0, 255));
        -webkit-background-clip: text;
        -moz-background-clip: text;
        background-clip: text;
        color: transparent;
    }

	img{
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 100%;
		opacity: 0.125;
		z-index: -1;
	  }



</style>