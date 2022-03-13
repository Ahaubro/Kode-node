<script>
    import faker from '@faker-js/faker';
    import TableHead from '../TableHead/TableHead.svelte';
    import TableRow from '../TableRow/TableRow.svelte';
    let people = [];

    getNewPeople();
    
    function getNewPeople() {

        people = [];
        
        for(let i = 0; i < 20; i++) {

            let person = {
                firstname: faker.name.firstName(),
                lastname: faker.name.lastName()
            };

            people.push(person);
        }
        people = people;
    }

</script>


<!--<h1>{faker.name.findName()}</h1> -->


<table>
    <TableHead columns={['First name', 'Last name']}/>
    <tbody>
        {#each people as person}
        <TableRow columns={[person.firstname, person.lastname]}/>
        {/each}
    </tbody>
</table>

<button on:click={getNewPeople}>Get more ramdom names</button>



<style>

    table{
        position: absolute;
        left: 50%;
        transform: translate(-50%, 0);
        border: 1px solid black;
        font-family: Comic Sans MS;
        padding: 10px;
        background-color: rgb(215, 250, 248);
        width: 20%;
        margin: 25px 0;
        border-collapse: collapse;
        border: 1px solid black;
    }

    button{
        position: absolute;
        left: 50%;
        top: 92%;
        transform: translate(-50%, 0);
        display:inline-block;
        padding: 0.35em 1.2em;
        border: 0.1em solid #ffffff;
        margin: 0 0.3em 0.3em 0;
        border-radius: 0.12em;
        box-sizing: border-box;
        text-decoration: none;
        font-family: Comic Sans MS;
        font-weight: 300;
        color: #0f0f0f;
        text-align: center;
        transition: all 0.5s;
        background-color: rgb(208, 113, 221);
    }

    button:hover{
        color: #fa02bc;
        background-color: #080101;

    }

    


</style>