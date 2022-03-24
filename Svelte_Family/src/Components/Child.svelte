<script>
    import { supermarket } from "../Store/supermarket";


    export let name;
    export let isGirl = false;
    export let stereotype = "";
    export let handleFamilyMeetingCall;

    function eatCandy() {
        supermarket.update(storeValue => {
            if(storeValue.candy > 0) storeValue.candy--;
            return storeValue;
        });
    }


</script>



<div class:girly={isGirl} 
     class={stereotype || "beyond-any-stereotype"}>

    <h3 on:click|preventDefault={handleFamilyMeetingCall(name)}>Ey im a child my name is {name} </h3>

</div>

<div>Pieces of candy: {$supermarket.candy}</div>

<button on:click={eatCandy}>Eat candy</button>


<style>
    .girly{
        background-color: pink;
    }

    .black-sheep{
        background-color: black;
        color: white;
    }

    .bright-kid{
        background-color: yellow;
    }

    .beyond-any-stereotype{
        font-family: Comic Sans MS;
    }
</style>