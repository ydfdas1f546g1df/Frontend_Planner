<script>
import HeaderComponent from "$lib/components/headercomponent/HeaderComponent.svelte";
let authenticated = true;
import '$lib/main.less'
</script>

<HeaderComponent authenticated={authenticated}/>
<slot></slot>
