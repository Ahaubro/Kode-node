<script>
    export let name;
    export let handleFamilyMeetingCall;

</script>


<h1 class="parent" on:click={handleFamilyMeetingCall(name)}>
    Ima parent and my name is {name}
</h1>


<style>
    .parent{
        user-select: none;
        cursor: pointer;
    }
</style>