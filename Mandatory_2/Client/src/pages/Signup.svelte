<script>
    import {navigate} from "svelte-navigator";
    import {clickOutside} from "../scripts/clickOutside";
    import {notifications} from "../notifications.js"
    import Toast from "./Toast.svelte";

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

        if(res.status == 404) {
            responseMessage = await res.text();
            notifications.warning(responseMessage)
        } else {

            responseMessage = await res.text();

            setTimeout( () => {
                navigate("/", {replace:true})
            }, 2000);

            notifications.success("Ny bruger oprettet - Du har modtaget en mail fra os")
        }
    }


    
    async function login() {
        const res = await fetch(`/api/login`, {
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(newUser)
        })

        if(res.status == 201) {

            responseMessage = await res.text();
            notifications.info(responseMessage);

            setTimeout( () => {
                navigate("/", {replace:true})
            }, 2000);

        } else {
            responseMessage = await res.text();
            notifications.danger(responseMessage);
        }
    }


</script>


<h1 class="multicolortext">Signup eller login</h1>
<hr>
<br/>

<Toast/>

<br>

<p>Udfyld felterne nedenfor og vælg herefter login hvis du har en ekstisterende bruger. <br>
    Hvis eksisterende bruger ikke haves - Udfyld felterne og klik herefter på Opret ny bruger</p>


<div id="login">
    <br>
    <p id="itxt">Kea Kiosk login system</p>
    <hr>
    <br>
    <input type="email" placeholder="Email" bind:value={newUser.username}/>
    <br/>
    <input placeholder="Password" bind:value={newUser.password} type="password"/>
    <br/>
    <br>
    <div class="modalBtns">
        <button class="loginButton" on:click={ () => login()}> Login </button>
        <br>
        <button class="createButton" on:click={signupUser}> Opret ny bruger </button>
        <br>
        <!--<button class="forgotButton" on:click="{showEditModal}" >I forgot my password</button> -->
    </div>

</div>

<h3>{responseMessage}</h3>





<style>

    #login{
        width: 13%;
        height: 35%;
        background-color: rgb(61, 60, 58);
        border: 3px solid rgb(6, 166, 206);
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 7px;
    }

    input{
        width: 90%;
    }

    h1{
        font-family: Comic Sans MS;
        font-size: 35px;
        color: rgb(30, 82, 224);
        font-weight: 1000;
    }

    h3{
        position: fixed;
        bottom: 10%;
        left: 50%;
        transform: translateX(-50%)
    }
    
    #itxt{
        font-size: 20px;
        font-weight: 700;
        color: white;
        font-family: Comic Sans MS;

    }

    p{
        font-size: 18px;
        font-weight: 400;
        font-family: Comic Sans MS;

    }

    .multicolortext {
        background-image: linear-gradient(to left, rgb(66, 11, 138), indigo, rgb(6, 223, 252), rgb(240, 85, 85), rgb(123, 255, 0), rgb(243, 14, 224), rgb(183, 0, 255));
        -webkit-background-clip: text;
        -moz-background-clip: text;
        background-clip: text;
        color: transparent;
    }

    .loginButton{
        background-color: rgb(0, 174, 255);
        border-radius: 4px;
        padding: 8px;
        width: 40%;
        font-weight: 500;
    }

    .loginButton:hover{
        background-color: rgb(0, 132, 255);
        transition: 0.35s;
    }

    .createButton{
        background-color: rgb(0, 255, 115);
        border-radius: 4px;
        padding: 8px;
        font-weight: 500;

    }

    .createButton:hover{
        background-color: rgba(72, 255, 0, 0.966);
        transition: 0.35s;
    }

</style>