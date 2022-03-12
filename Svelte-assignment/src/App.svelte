<script>
	// Intro
	import Nested from "./pages/Nested.svelte";
	import Things from "./pages/Things.svelte";
	import Info from './pages/Info.svelte';
	import Inner from "./pages/Inner.svelte";
	import Outer from "./pages/Outer.svelte";
	import CustomButton from "./pages/CustomButton.svelte";

	export let name;
	//let src = '/public/image.gif';
	//let nameRick = 'Rick Astley';
	let string = `here's some <strong>HTML!!!</strong>`;

	// Reactivity
	let count = 0;

	function handleClick() {
		count += 1;
	}

	let nextCount = 1;

	$: doubled = nextCount * 2;
	$: quadrupled = doubled * 2;

	function nextHandleClick() {
		nextCount += 1;
	}

	let thirdCount = 0;

	$: if (thirdCount >= 10) {
		alert(`count is dangerously high!`);
		thirdCount = 9;
	}

	function thirdHandleClick() {
		thirdCount += 1;
	}

	// Props

	const pkg = {
		name: 'svelte',
		version: 3,
		speed: 'blazing',
		website: 'https://svelte.dev'
	};


	// Logic
	let user = {loggedIn: false};

	let x = 7;

	function toggle() {
		user.loggedIn = !user.loggedIn;
	}

	let cats = [
		{ id: 'J---aiyznGQ', name: 'Keyboard Cat' },
		{ id: 'z_AbfPXTKms', name: 'Maru' },
		{ id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
	];

	

	let things = [
		{ id: 1, color: 'darkblue'},
		{ id: 2, color: 'indigo' },
		{ id: 3, color: 'deeppink' },
		{ id: 4, color: 'salmon' },
		{ id: 5, color: 'gold' }
	];

	function handleThingsClick() {
		things = things.slice(1);
	}

	let promise = getRandomNumber();
	
	async function getRandomNumber() {
		const res = await fetch(`/tutorial/random-number`);
		const text = await res.text();

		if(res.ok) {
			return text;
		} else {
			throw new Error(text);
		}
	}

	function handleRandomClick() {
		promise = getRandomNumber();
	}

	// DOM

	let m = { x: 0, y: 0 };

	function handleMousemove(event) {
		m.x = event.clientX;
		m.y = event.clientY;
	}

	let m1 = {x: 0, y: 0};

	function handleDomClick() {
		alert('No more alerts')
	}

	function handleMessage(event) {
		alert(event.detail.text);
	}

	function handleMessageOuter(event) {
		alert(event.detail.text);
	}

	function handleCustomBtnClick() {
		alert('Clicked - This button loves clicking')
	}




</script>

<main>
	<!-- Intro-->
	<h1>Herro {name}!</h1>
	<p1>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p1>



	<p>Styled!</p>

	<p>{@html string}</p>

	<!-- Intro end-->

	
	
	<!-- REACTIVITY -->


	<button on:click={handleClick}>
		Clicked {count} {count === 1 ? 'time' : 'times'}
	</button>



	<button on:click={nextHandleClick}>
		Count: {nextCount}
	</button>
	
	<p>{nextCount} * 2 = {doubled}</p>
	<p>{doubled} * 2 = {quadrupled}</p>

	<button on:click={thirdHandleClick}>
		Clicked {thirdCount} {thirdCount === 1 ? 'time' : 'times'}
	</button>

	<!-- REACTIVITY end -->


	<!-- props -->

	<Nested answer={42}/>

	<Info {...pkg}/>

	<!-- props end -->


	<!-- Logic -->


	<!--{#if user.loggedIn}
		<button on:click={toggle}>
			Log out
		</button>
	{/if}

	{#if !user.loggedIn}
		<button on:click={toggle}>
			Log in
		</button>
	{/if} -->

	{#if user.loggedIn}
		<button on:click={toggle}>
			Log out
		</button>
	{:else}
		<button on:click={toggle}>
			Log in
		</button>
	{/if}


	{#if x > 10}
		<p>{x} is greather than 10</p>
		{:else if 5 > x}
		<p>{x} is less than 5</p>
		{:else}
		<p>{x} is between 5 and 10</p>
	{/if}

	<h1>The famous cats of youtube</h1>

	<nav>
		{#each cats as {id, name}, i }
			<li>
				<a target="_blank" href="https://www.youtube.com/watch?v={id}">
					{i + 1}: {name}
				</a>
			</li>
		{/each}
		</nav>

<br/>

	<button on:click={handleThingsClick}>
		Remove first thing
	</button>

	<div style="display: grid; grid-template-columns: 1fr 1fr; grid-gap: 1em">
		<div>
			<h2>Keyed</h2>
			{#each things as thing (thing.id)}
				<Things current={thing.color}/>
			{/each}
		</div>
	
		<div>
			<h2>Unkeyed</h2>
			{#each things as thing}
				<Things current={thing.color}/>
			{/each}
		</div>
	</div>

	<button on:click="{handleRandomClick}">
		Generate random number
	</button>

	{#await promise}
	<p>... Waiting</p>
	{:then number}
	<p>The number is {number}</p>
	{:catch error}
	<p style="color: red;"> {error.message}</p>
	{/await}

	<!-- Logic Last excercise is not working, only because of the missing file random-number, maybe it's there, i just can't find it.
	But i do understand the concept. -->

	<!-- DOM -->


	
	<div on:mousemove={handleMousemove}>
		The mouse position is {m.x} x {m.y}
	</div>

	<div on:mousemove="{e => m = { x: e.clientX, y: e.clientY }}">
		The mouse position is {m.x} x {m.y}
	</div>

	<button on:click|once={handleDomClick}> 
		Click me, i will only work once
	</button>

	<Inner on:message={handleMessage} />

	<Outer on:message={handleMessageOuter} />

	<CustomButton on:click={handleCustomBtnClick}/>



	<!-- DOM end-->

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

	p{
		color: purple;
		font-family: Comic Sans MS;
		font-size: 30px;
		text-align: center;
	}

	div { width: 100%; height: 100%; }
</style>