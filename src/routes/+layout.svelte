<script>
    import { onMount } from 'svelte';
    import { globalState } from '$lib/store';
    let state;
    const unsubscribe = globalState.subscribe(authenticated => {
        state = authenticated;
    });
    onMount(() => {
        if (state.Gauthenticated === false && window.location.pathname !== "/login" && window.location.pathname !== "/register") {
            window.location.href = "/login";
        }
    });
import HeaderComponent from "$lib/components/headercomponent/HeaderComponent.svelte";
import '$lib/main.less'
</script>

<HeaderComponent authenticated={state.Gauthenticated}/>
<slot></slot>
