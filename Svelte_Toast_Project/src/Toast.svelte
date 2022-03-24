<script>
  import { createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";
  import SuccessIcon from "./SuccessIcon.svelte";
  import CloseIcon from "./CloseIcon.svelte";
  import { dismissToast, toasts } from "./store";
  import { validate_each_keys } from "svelte/internal";

  const dispatch = createEventDispatcher();

  // Sætter fields til min notifikation
  export let type = "success";
  export let message  = "Brug koden lololol og få yderligere 10% rabat";


</script>

<article class={type} role="alert" transition:fade>

  <!-- If staTEMENT TAGER IMOD INPUT FRA TYPEN AF BESKED -  SUCCESS, ERROR ELLER INFO-->
 
    <SuccessIcon width="1.1em" />

  


  <!-- Her kan sættes indhold, f.eks, message-->
  <div class="text">
    <slot />
    {message}
  </div>

  
    <button class="close" on:click={() => dispatch("dismiss")}>

      <!--Størrelsen på luk ikonet-->
      <CloseIcon width="1em" />
    </button>
</article>










<style lang="postcss">
  article {
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 0.2rem;
    display: flex;
    align-items: center;
    margin: 0 auto 0.5rem auto;
    width: 20rem;
  }
  .error {
    background: IndianRed;
  }
  .success {
    background: MediumSeaGreen;
  }
  .info {
    background: SkyBlue;
  }
  .text {
    margin-left: 1rem;
  }
  button {
    color: white;
    background: transparent;
    border: 0 none;
    padding: 0;
    margin: 0 0 0 auto;
    line-height: 1;
    font-size: 1rem;
  }
</style>
