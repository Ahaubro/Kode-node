<script>
    import { navigate } from "svelte-navigator";
    import {notifications} from "../notifications.js"
    import { token } from "../store/accessStore.js";
    import Toast from "./Toast.svelte"

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
        

        if(res.status == 201) {
            
            localStorage.setItem('token', '1');
            token.set(localStorage.getItem('token'));

            notifications.info(responseMessage)

            setTimeout( () => {
                navigate("/admin", {replace:true});
            }, 1500);
    
            localStorage.setItem('token', '0');
        
        } else {
            notifications.warning(responseMessage)
            localStorage.setItem('token', '0');
    
        }
    }   
    
</script>


<h1 class="multicolortext">Admin log in</h1>
<hr>

<br>
<br>

<p> Login med en Admin bruger, for at tilgå Kea kiosken administrations side.<p>


<div id="login">
    <br>
    <p id="itxt">Kea kiosk Admin login</p>
    <hr>
    <br>
    <input placeholder="Email" bind:value={newUser.username} type="text"/>
    <br/>
    <input placeholder="Password" bind:value={newUser.password} type="password"/>
    <br/>
    <br>
    <div class="modalBtns">
    <button  class="loginButton" on:click={login}>Login som Admin</button>
    </div>
</div>



<style>
    .multicolortext {
        background-image: linear-gradient(to left, rgb(172, 50, 13), rgb(63, 231, 253), rgb(243, 14, 224), rgb(202, 128, 231));
        -webkit-background-clip: text;
        -moz-background-clip: text;
        background-clip: text;
        color: transparent;
    }

    h1{
        font-family: Comic Sans MS;
        font-size: 35px;
        color: rgb(30, 82, 224);
        font-weight: 1000;
    } 

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

    #itxt{
        font-size: 20px;
        font-weight: 700;
        color: white;
        font-family: Comic Sans MS;

    }

    p{
        font-size: 25.5px;
        font-weight: 400;
        font-family: Comic Sans MS;

    }

    .loginButton{
        background-color: rgb(0, 174, 255);
        border-radius: 4px;
        padding: 8px;
        width: 60%;
        font-weight: 500;
    }

    .loginButton:hover{
        background-color: rgb(0, 132, 255);
        transition: 0.35s;
    }
</style>