<script>
import Table from "./Components/Table.svelte";

import TableHead from "./Components/TableHead.svelte";

	export let name;
</script>

<main>
	<h1>Welcome back {name}!</h1>

	<Table />
	<TableHead/>
	


</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>