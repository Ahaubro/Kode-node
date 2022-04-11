<script>

    import { navigate } from "svelte-navigator";

    let responseMessage = "";


    async function logout() {
        const res = await fetch(`/api/logout`);

        responseMessage = await res.text();

        setTimeout( () => {
            navigate("/", {replace:true});
        }, 1500);
    }

</script>


<h1 class="multicolortext">Log ud side</h1>

<hr>

<button on:click={logout}> Log out </button>

<h3>{responseMessage}</h3>

<style>
    .multicolortext {
        background-image: linear-gradient(to left, rgb(66, 11, 138), indigo, rgb(6, 223, 252), rgb(255, 0, 191), rgb(123, 255, 0), rgb(243, 14, 224), rgb(183, 0, 255));
        -webkit-background-clip: text;
        -moz-background-clip: text;
        background-clip: text;
        color: transparent;
    }
</style>

