<script>
	import {Router, Link, Route} from "svelte-navigator"
	import About from "./pages/About.svelte"
	import Admin from "./pages/Admin.svelte";
	import Checkout from "./pages/Checkout.svelte";
	import Home from "./pages/Home.svelte"
	import Products from "./pages/Products.svelte";
	import Signup from "./pages/Signup.svelte";
	import AdminLogin from "./pages/AdminLogin.svelte";
	import Footer from "./components/Footer.svelte";
	import ProtectedRoutes from "./components/ProtectedRoutes.svelte";
	import { notifications } from "./notifications";
	import Toast from "./pages/Toast.svelte"

	let responseMessage = "";

	async function logout() {
        const res = await fetch(`/api/logout`);

        responseMessage = await res.text();

		notifications.warning(responseMessage)

    }


	function hideResponse() {
		setTimeout( () => {
            document.getElementById("res").style.display="none"
        }, 3000);
	}

	
</script>

<main>
	<img src="/images/baggrund.jpg" alt="background">

	<h1 class="multicolortext">KEAs online kiosk </h1>

	
	<div class="cart">
		<Router>
			<Link to="/checkout" > Kurv </Link>
		</Router>
	</div>



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
					<li><Link to="/signup" > Sign up & login </Link></li>
				</div>

				<div class="link-wrapper">
					<li><Link to="/adminLogin" > Admin side </Link></li>
				</div>

				<div class="link-wrapper">
					<li> <button on:click={logout} on:click={hideResponse} id="btn" > Logout </button> </li>
				</div>
				
			</ul>
		</nav>

		<Route path="/about" component={About}></Route>
		<Route path="/" component={Home}></Route>
		<Route path="/products" component={Products}></Route>
		<Route path="/adminLogin" component={AdminLogin}></Route>
		<Route path="/checkout" component={Checkout}></Route>
		<Route path="/signup" component={Signup}></Route>
		
		<Route path="/" component={Home}></Route>
		<ProtectedRoutes path="/admin" component={Admin}/>

	</Router>

	<!--<h3 id="res">{responseMessage}</h3> -->

<Footer/>

<Toast/>

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
    	background-color: #5bc0de;
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
		transition: 0.2s;
	}

	#btn{
		display: block;
		font-family: Comic Sans MS;
		padding: 18px 55px;
		text-decoration: none;
		font-weight: 1000;
		background-color: #5bc0de;
		border: none;
		color: rgba(236, 72, 72, 0.767);
	}

	#btn:hover{
		background-color: rgb(42, 122, 243);
		transition: 0.2s;
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
		opacity: 0.25;
		z-index: -1;
	  }

	  .cart{
		  position: absolute;
		  left: 90%;
		  top: 5%;
	  }

	  h3{
        position: fixed;
        bottom: 9%;
        left: 50%;
        transform: translateX(-50%)
    }



</style>