<script>
	import { Router, Link, Route } from "svelte-navigator";
	import About from "./Pages/About/About.svelte";
	import Admin from "./Pages/Admin/Admin.svelte";
	import Home from "./Pages/Home/Home.svelte";



</script>

<Router>
	<nav>
		<Link to="/"> Home </Link>
		<Link to="/about"> About </Link>
		<Link to="/admin"> Admin </Link>
	</nav>

	<Route path="/about" component={About}/>
	<Route path="/admin" component={Admin}/>
	<Route path="/" component={Home}/>

</Router>



<style>
	

	nav{
		width: 100%;
	}
</style>