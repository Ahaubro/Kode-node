<script>
    export let columns = [];

</script>


<thead>
    {#each columns as column }
        <th>{column}</th>
    {/each}
</thead>

<style>
    th{
        border: 1px solid black;
        padding: 10px;
    }
</style>