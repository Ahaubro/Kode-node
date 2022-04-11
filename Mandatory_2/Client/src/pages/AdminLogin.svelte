<script>
    import { navigate } from "svelte-navigator";

    let newUser = {};
    let responseMessage = "";
    


    async function login() {
        const res = await fetch(`/api/adminLogin`, {
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(newUser)
        })

        responseMessage = await res.text();
        
        const re1 = await fetch(`/api/users`);

        // DET DRILLER HER
        setTimeout( () => {
            navigate("/admin", {replace:true})
        }, 3000);
    }   
    
</script>


<h1 class="multicolortext">Admin log in</h1>
<hr>

<h3>Udfyld felterne nedenfor</h3>
<input placeholder="username" bind:value={newUser.username} type="text"/>
<br/>
<input placeholder="password" bind:value={newUser.password} type="password"/>
<br/>

<div class="modalBtns">
    <button class="createButton" on:click={login}>Login as Admin</button>
</div>

<h3>{responseMessage}</h3>



<style>
    .multicolortext {
        background-image: linear-gradient(to left, rgb(172, 50, 13), rgb(63, 231, 253), rgb(243, 14, 224), rgb(202, 128, 231));
        -webkit-background-clip: text;
        -moz-background-clip: text;
        background-clip: text;
        color: transparent;
    }
</style>