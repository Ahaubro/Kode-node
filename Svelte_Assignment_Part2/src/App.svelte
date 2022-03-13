<script>
import PeopleTable from "./Components/PeopleTable/PeopleTable.svelte";


	export let name;
</script>

<main>
	<h1>Welcome {name}!</h1>

	<p>Press the button to see more random names!</p>

	<PeopleTable/>


</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	p{
		font-family: Comic Sans MS;
		color: aliceblue;
		font-size: 22px;
	}

	h1 {
		color: #e03862;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}

	:global(body){
        background-image: url("https://cdn.wallpapersafari.com/15/19/9bdWqY.jpg");
	}
</style>