<script>
<<<<<<< HEAD
import Table from "./Components/Table.svelte";

import TableHead from "./Components/TableHead.svelte";
=======
import PeopleTable from "./Components/PeopleTable/PeopleTable.svelte";

>>>>>>> b8b736ec9802461c6bf406dd1c55c21ce1922926

	export let name;
</script>

<main>
<<<<<<< HEAD
	<h1>Welcome back {name}!</h1>

	<Table />
	<TableHead/>
	
=======
	<h1>Welcome {name}!</h1>

	<p>Press the button to see more random names!</p>

	<PeopleTable/>
>>>>>>> b8b736ec9802461c6bf406dd1c55c21ce1922926


</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

<<<<<<< HEAD
	h1 {
		color: #ff3e00;
=======
	p{
		font-family: Comic Sans MS;
		color: aliceblue;
		font-size: 22px;
	}

	h1 {
		color: #e03862;
>>>>>>> b8b736ec9802461c6bf406dd1c55c21ce1922926
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
<<<<<<< HEAD
=======

	:global(body){
        background-image: url("https://cdn.wallpapersafari.com/15/19/9bdWqY.jpg");
	}
>>>>>>> b8b736ec9802461c6bf406dd1c55c21ce1922926
</style>