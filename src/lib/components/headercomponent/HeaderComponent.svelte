<script lang="ts">
    import {
        Header,
        SkipToContent,
        HeaderUtilities,
        HeaderGlobalAction,
        Dropdown,
    } from "carbon-components-svelte";
    import Logout from "carbon-icons-svelte/lib/Logout.svelte";
    import UserAvatarFilledAlt from "carbon-icons-svelte/lib/UserAvatarFilledAlt.svelte";
    import DataEnrichmentAdd from "carbon-icons-svelte/lib/DataEnrichmentAdd.svelte";
    import Login from "carbon-icons-svelte/lib/Login.svelte";
    import {onMount} from "svelte";
    export let authenticated = false;
    let theme = "g80";
    onMount(() => {
        let theme = document.documentElement.getAttribute("theme") || "g80"
    });
</script>

<Header company="KSH" platformName="Planner">
    <svelte:fragment slot="skip-to-content">
        <SkipToContent/>
    </svelte:fragment>
    <HeaderUtilities>
        {#if authenticated}
            <Dropdown
                title="Theme"
                selectedId={theme}
                items={[
                    {text: "Light", id: "white"},
                    {text: "Grey", id: "g10"},
                    {text: "Dark Grey", id: "g80"},
                    {text: "Light Black", id: "g90"},
                    {text: "Black", id: "g100"}
                ]}
                on:select={e => {
                    $: document.documentElement.setAttribute("theme", e.detail.selectedItem.id);
                    console.log(e.detail.selectedItem.id);
                }}
            />
            
        <HeaderGlobalAction
                iconDescription="Add Event"
                tooltipAlignment="center"
                icon={DataEnrichmentAdd}
                on:click={() => {
                    window.location.href = "/add-event";
                }}
        />
        <HeaderGlobalAction
                iconDescription="Profile"
                tooltipAlignment="center"
                icon={UserAvatarFilledAlt}
                on:click={() => {
                    window.location.href = "/profile";
                }}
        
        />
        <HeaderGlobalAction
                iconDescription="Log out"
                tooltipAlignment="end"
                icon={Logout}
                on:click={() => {
                    window.location.href = "/logout";
                }}
        />
        {:else}
            <HeaderGlobalAction
                    iconDescription="Log in"
                    tooltipAlignment="end"
                    icon={Login}
                    on:click={() => {
                        window.location.href = "/login";
                    }}
            />
        {/if}
        
        
    </HeaderUtilities>
</Header>


