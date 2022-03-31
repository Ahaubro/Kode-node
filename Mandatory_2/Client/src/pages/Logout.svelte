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


<h1>Logout</h1>

<hr>

<button on:click={logout}> Log out </button>

<h3>{responseMessage}</h3>



