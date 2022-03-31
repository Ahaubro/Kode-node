<script>
    import {navigate} from "svelte-navigator";

    let newUser = {};
    let responseMessage = "";

    async function signupUser() {
        const res = await fetch(`/api/signup`, {
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(newUser)
        })

        responseMessage = await res.text();

        setTimeout( () => {
            navigate("/", {replace:true})
        }, 1500);
    }


    
    async function login() {
        const res = await fetch(`/api/login`, {
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(newUser)
        })

        responseMessage = await res.text();

        setTimeout( () => {
            navigate("/", {replace:true})
        }, 1500);
    }

</script>


<h1>Signup</h1>
<hr>

<br/>

<h3>Udfyld felterne nedenfor</h3>
<input placeholder="username" bind:value={newUser.username} type="text"/>
<br/>
<input placeholder="password" bind:value={newUser.password} type="password"/>
<br/>

<div class="modalBtns">
    <button class="createButton" on:click={signupUser}>Sign up now</button>
    <button class="createButton" on:click={ () => login()}>Login</button>
</div>

<h3>{responseMessage}</h3>