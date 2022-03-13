<script>
    import Apple from "./Apple.svelte"


    const apples = ["🍏", "🍎", "🍏"]

    function pickApple() {
        apples.pop();
        apples = apples;
    }

</script>

<div id="tree">

<h2>I'm a tree</h2>


{#each apples as apple}

<Apple apple={apple} />

{/each}

<Apple apple={apples[0]} />
<Apple apple={apples[1]} />


<button on:click={pickApple}>Pick an apple</button>


<button on:click={() => pickApple("Jørgen")}>Pick an apple w. farmer</button>

</div>

<div id="trunk"></div>



<style>
    #tree{
        background-color: greenyellow;
    }
</style>

