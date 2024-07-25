<script>
    import {
        Header,
        SkipToContent,
        HeaderUtilities,
        HeaderGlobalAction,
    } from "carbon-components-svelte";
    import Logout from "carbon-icons-svelte/lib/Logout.svelte";
    import SettingsAdjust from "carbon-icons-svelte/lib/SettingsAdjust.svelte";
    import UserAvatarFilledAlt from "carbon-icons-svelte/lib/UserAvatarFilledAlt.svelte";
    import DataEnrichmentAdd from "carbon-icons-svelte/lib/DataEnrichmentAdd.svelte";
    import Login from "carbon-icons-svelte/lib/Login.svelte";
    export let authenticated = false;
</script>

<Header company="KSH" platformName="Planner">
    <svelte:fragment slot="skip-to-content">
        <SkipToContent/>
    </svelte:fragment>
    <HeaderUtilities>
        {#if authenticated}
        <HeaderGlobalAction
                iconDescription="Settings"
                tooltipAlignment="start"
                icon={SettingsAdjust}
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


