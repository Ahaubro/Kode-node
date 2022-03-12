<script lang="ts">
	export let name: string;
	let nameOne = 'world';


	import Tree from "./pages/Tree/Tree.svelte"
	import Bush from "./pages/Bush/Bush.svelte"
	import Sun from "./components/Sun/Sun.svelte"
	import Profile from "./pages/Profile/Profile.svelte";
</script>


<h1>Hello {nameOne}!</h1>

<main>
	<h1>Gå i seng {name}!</h1>
	<p>Tryk evt. her <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>

	<Sun/>
	<Tree/>
	<Bush/>

	<Profile name={"Alex"}
	favoriteColor={"Blue"} />

	<Profile name={"Thor"}
	favoriteColor={"Purple"} />

</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #00aeff;
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