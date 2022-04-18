<script>
    import { Route } from 'svelte-navigator';
    import AccessDenied from '../pages/AccessDenied.svelte';
    import { token } from "../store/accessStore.js"

    export let path;
    export let component;

    $: isAuthenticated = $token;
</script>

{#if isAuthenticated > 0 }
    <Route path={path} component={component}/>
{:else}
    <Route path={path} component={AccessDenied} />
{/if}
