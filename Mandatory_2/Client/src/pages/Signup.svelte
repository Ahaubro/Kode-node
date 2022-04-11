<script>
    import {navigate} from "svelte-navigator";
    import {clickOutside} from "../scripts/clickOutside";

    let newUser = {};
    let responseMessage = "";
    let editModalClass = "hidden-modal";

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

    //---------------- IDAG --------------------

    function hidePasswordModal() {
        editModalClass = 'hidden-modal';
    }

    function showEditModal() {
        editModalClass = "shown-modal";
    }

    async function sendPassword() {
        const res = await fetch(`/api/forgotPassword`, {
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


<h1 class="multicolortext">Signup or login to existing user</h1>
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
    <br>
    <button class="forgotButton" on:click="{showEditModal}" >I forgot my password</button>
</div>

<h3>{responseMessage}</h3>





<div use:clickOutside on:click_outside={hidePasswordModal} id="edit-modal" class={editModalClass}>

    <h3>Forgotten password</h3>
    <hr>
    <br/>
    <label for="username">Type your email</label>
    <input type="text" bind:value="{newUser.username}"/>
    <br/>

    <div class="modalBtns">
        <button on:click="{sendPassword}"> Send mail med password</button>
        <br>
        <button on:click={hidePasswordModal}>Close</button>
    </div>

</div> 





<style>
    .multicolortext {
        background-image: linear-gradient(to left, rgb(66, 11, 138), indigo, rgb(6, 223, 252), rgb(255, 0, 0), rgb(123, 255, 0), rgb(243, 14, 224), rgb(183, 0, 255));
        -webkit-background-clip: text;
        -moz-background-clip: text;
        background-clip: text;
        color: transparent;
    }

    .createButton{
        background-color: rgb(0, 174, 255);
        border-radius: 4px;
        padding: 5px;
    }

    .createButton:hover{
        background-color: rgb(0, 132, 255);
        transition: 0.35s;
    }

    .forgotButton{
        background-color: rgb(255, 153, 0);
        border-radius: 4px;
        padding: 5px;
    }

    .forgotButton:hover{
        background-color: rgb(255, 81, 0);
        transition: 0.35s;
    }

    .hidden-modal{
        display: none;
    }

    .shown-modal{
        background-color: rgba(255,255,255, 0.98);
        border: 1px solid black;
        padding: 18px;
        display: block;
        position: absolute;
        height: 300px;
        width: 500px;
        left: 50%;
        top: 32%;
        transform: translateX(-50%);
        z-index: 1;
        border-radius: 7px;

    }
</style>