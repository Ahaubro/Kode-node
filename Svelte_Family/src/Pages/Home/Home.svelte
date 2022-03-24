<script>
    import Child from "../../Components/Child.svelte";
    import Parent from "../../Components/Parent/Parent.svelte";
    
    import { supermarket } from "../../Store/supermarket";
    


    const parents = [
        {
            id: 1, 
            name: "Frank"
        },
        {
            id: 2, 
            name: "Casper"
        }
    ];

    function onFamilyMeetingCalled(whoCalled) {
        alert("Family meeting called " + whoCalled);
    }

</script>

<h1>This is the home of the svelte family</h1>

{#each parents as parent(parent.id)}
    <Parent handleFamilyMeetingCall={onFamilyMeetingCalled} name = {parent.name}/>
{/each}

<Child handleFamilyMeetingCall={onFamilyMeetingCalled} stereotype="black-sheep" name="Gert"/>
<Child handleFamilyMeetingCall={onFamilyMeetingCalled} stereotype="bright-kid"  name="Gert junior"/>
<Child handleFamilyMeetingCall={onFamilyMeetingCalled} isGirl={true} name="Gertrine"/>

<h1>This is the online supermarket portal</h1>
<p>{JSON.stringify($supermarket, null, 4)}</p>