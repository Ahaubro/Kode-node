<script>
	import {onMount} from "svelte";
	import {baseUrl}from "./store/generalStore.js"

	let players = "";


	onMount( async () => {
		const response = await fetch($baseUrl + "/players");
		const {data: playersArray}  = await response.json();
		players = playersArray
	});


</script>

<main>
	{$baseUrl}
	<h1>Page content</h1>
	<h1>{JSON.stringify(players)}</h1>

</main>

<footer>
	{new Date().getFullYear()}
	Contact
	About
</footer>



<!--min-height: calc() får footer til at blive nederst på siden-->


<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
		min-height: calc(100vh - 3.6em); 
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	footer{
		background-color: antiquewhite;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>