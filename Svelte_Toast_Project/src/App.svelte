<script>
	import { addToast } from "./store";
	import Toast from "./Toast.svelte"
  
	let message = "Hello, World!";
	let types = ["success", "error", "info"];
	let type = "success";
	let dismissible = true;
	let timeout = 0;

	import {notifications} from './notifications.js'


	let n;

  </script>

<button on:click={() => notifications.warning('Wait a moment...')}>
	Warn!
</button>

  

  <Toast type="info" dismissible={true}/>

  
  <form on:submit|preventDefault>
	<p>
	  <label>
		Message:
		<input bind:value={message} />
	  </label>
	</p>
	<p>
	  <label>
		Timeout:
		<input bind:value={timeout} type="number" />
	  </label>
	</p>
	<p>
	  <label>
		Type:
		<select bind:value={type}>
		  {#each types as type}
			<option value={type}>{type}</option>
		  {/each}
		</select>
	  </label>
	</p>
	<p>
	  <label>
		<input bind:checked={dismissible} type="checkbox" />
		Dismissible?
	  </label>
	</p>
	<button on:click={() => addToast({ message, type, dismissible, timeout })}>
	  Add toast
	</button>
  </form>
  
  <style>
	:global(*) {
	  box-sizing: border-box;
	}
  
	form {
	  border: 0 none;
	  margin-top: 15rem;
	  text-align: center;
	}
  </style>