<script>
    export let columns = [];
</script>


<tr>
    {#each columns as column }
        <td>{column}</td>
    {/each}
</tr>


<style>
    td{
        border: 1px solid black;
        padding: 2px;
    }
</style>