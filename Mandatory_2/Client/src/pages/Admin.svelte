<script>
    import { onMount } from "svelte";

    import {clickOutside} from "../scripts/clickOutside";
	
    let products = [];
    let name;
    let price;
    let description;

    // Modal JS
    let newProduct;
    let curProduct;
    let editModalClass = "hidden-modal";
    let createModalClass = "hidden-modal";
    
    function showEditModal(product) {
        curProduct = product;
        console.log(curProduct);
        editModalClass = "shown-modal";
    }
    

    function showCreateModal() {
        newProduct = {
            name: "",
            price: "",
            description: "",
            imagePath: "/images/img.png"
        };
        console.log(newProduct);
        createModalClass = "shown-modal";
    }


    function hideEditModal() {
        editModalClass = 'hidden-modal';
    }


    function hideCreateModal() {
        createModalClass = 'hidden-modal';
    }


    // Når siden bliver loadet så kaldes loadAll
    onMount(loadAll);


    // Function der fetcher produkter fra mit endpoint
    async function loadAll() {
        const res = await fetch(`/api/products`);
        const { data:productsArr } = await res.json();
        products = productsArr;
    }


    // Function der sender et post request til mit endpoint - LAV DETTE I EN MODAL
    async function createProduct() {
        const res = await fetch(`/api/products`, {
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(newProduct)
        })
        await loadAll();
        hideCreateModal();
    }

    
    //Function der sender et delete request til mit endpoint
    async function deleteProduct(id) {
        id = Number(id);
        const res = await fetch(`/api/products/${id}`, {
            headers: {
                'content-type': 'application/json'
            },
            method: 'DELETE'
        });
        await loadAll();
    }

    //Function der sender et PUT request til mit endpoint
    async function editProduct(product) {
        const id = Number(product.id);
        const res = await fetch(`/api/products/${id}`, {
            headers: {
                'Accept': 'applictation/json',
                'content-type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify(product)
        
        });
        let product1 = await res.json();
        console.log(product1)

        
        await loadAll();
        hideEditModal();
    }




</script>




<h1>Admin site</h1>

<!--Tabel over alle produkter-->
<div>
    <h3>Administrer produkter!</h3>
    <table id="tableMid">
        <thead>
            <tr>
                <th>ID</th>
                <th>Navn</th>
                <th>Pris</th>
                <th>Beskrivelse</th>
                <th colspan="2" style="text-align: center;">Buttons</th>
            </tr>
        </thead>
        <tbody>

        {#each products as product}
            
            <tr>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td style="text-align: center;"><button class="closeButton" on:click={ () => deleteProduct(product.id)}>Slet</button></td>
                <td style="text-align: center;"><button class="editButton" on:click={ () => showEditModal(product)}>Rediger</button></td>
            </tr>
              
        {/each}

        </tbody>
    </table>
</div>

<br/>




<!-- Den her DIV bruges kun til at oprette nyt produkt-->
<div>

    <button class="createButton" type="button" on:click="{showCreateModal}">Opret produkt</button>

</div>
<!-- Den her DIV bruges kun til at oprette nyt produkt-->



<!--Modal edit HTML starter her -->
{#if curProduct}
    
    <div use:clickOutside on:click_outside={hideEditModal} id="edit-modal" class={editModalClass}>
        <h3>Edit product</h3>
        <hr>
        <span> ID:  {curProduct.id}</span>
        <br/>
        <label for="name">Edit name</label>
        <input bind:value={curProduct.name} type="text"/>
        <br/>
        <label for="price">Edit price</label>
        <input bind:value={curProduct.price} type="text"/>
        <br/>
        <label for="description">Edit description</label>
        <input bind:value={curProduct.description} type="text"/>
        <br/>

        <div class="modalBtns">
            <button class="editButton" on:click={ () => editProduct(curProduct)}>Edit</button>
            <button class="closeButton" on:click={hideEditModal}>Close</button>
        </div>

    </div> 

{/if}


<!--Modal edit HTML starter her -->
{#if newProduct}
    
    <div use:clickOutside on:click_outside={hideCreateModal} class={createModalClass} id="crModalDiv">
        <h3>Create new product</h3>
        <hr>
        <input placeholder="Name" bind:value={newProduct.name} type="text"/>
        <br/>
        <input placeholder="Price" bind:value={newProduct.price} type="text"/>
        <br/>
        <input placeholder="Description" bind:value={newProduct.description} type="text" />
        <br/>

        <div class="modalBtns">
            <button class="createButton" on:click={ () => createProduct(curProduct)}>Create product</button>
            <button class="closeButton" on:click={hideCreateModal}>Close</button>
        </div>

    </div> 

{/if}





<style>
    h1{
       font-family: Comic Sans MS;
       font-size: 45px;
   }

   h3{
       font-family: Comic Sans MS;
       font-size: 25px;
   }

   table{
       border-collapse: collapse;
       width: 50%;
       border-radius: 15px;
       font-family: Comic Sans MS;
   }

   th{
       background-color: rgba(240, 230, 196, 0.863);
       text-align: center;

   }

   td, th{
       border: 1px solid rgb(50, 56, 56);
       text-align: left;
       width: 10%;
       padding: 5px;
   }

   tr:nth-child(even) {
       background-color: rgba(243, 236, 223, 0.877);
   }

   #tableMid{
       position: relative;
       left: 25%;
       width: 50%;
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
        width: 500px;
        left: 50%;
        top: 32%;
        transform: translateX(-50%);
        z-index: 1;
        border-radius: 7px;

    }

    input{
        width: 70%;
        font-family: Comic Sans MS;
    }

    .createButton{
        background-color: rgb(64, 192, 64);
        border-radius: 5px;
        font-size: 15px;
        font-family: Comic Sans MS;
        font-weight: 20px;
        color: white;
        width: 150px;
        text-align: center;
    }

    .closeButton{
        background-color: rgb(230, 26, 26);
        border-radius: 5px;
        font-size: 15px;
        font-family: Comic Sans MS;
        font-weight: 20px;
        color: white;
        width: 100px;
        text-align: center;
    }

    .editButton{
        background-color: rgb(26, 114, 230);
        border-radius: 5px;
        font-size: 15px;
        font-family: Comic Sans MS;
        font-weight: 20px;
        color: white;
        width: 100px;
        text-align: center;
    }

    .editButton:hover{
        background-color: blue;
        transition: 0.2s;
    }

    .closeButton:hover{
        background-color: rgb(150, 18, 18);
        transition: 0.2s;
    }

    .createButton:hover{
        background-color: rgba(12, 134, 7, 0.829);
        transition: 0.2s;
    }

    .modalBtns{
        margin-top: 15px;
    }

    #crModalDiv{
        height: 350px;
    }



</style>