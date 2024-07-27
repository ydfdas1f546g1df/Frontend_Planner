<script>
    import '$lib/main.less'
    import PostEdit from "$lib/components/postEdit/PostEdit.svelte";
    import {onMount} from 'svelte';
    import {globalState} from '$lib/store';
    import {
        Content,
        Dropdown,
        Theme,
        HeaderGlobalAction,
        Header,
        SkipToContent,
        HeaderUtilities,
        LocalStorage, Popover
    } from "carbon-components-svelte";
    import Logout from "carbon-icons-svelte/lib/Logout.svelte";
    import UserAvatarFilledAlt from "carbon-icons-svelte/lib/UserAvatarFilledAlt.svelte";
    import DataEnrichmentAdd from "carbon-icons-svelte/lib/DataEnrichmentAdd.svelte";
    import Login from "carbon-icons-svelte/lib/Login.svelte";

    let state;
    const unsubscribe = globalState.subscribe(authenticated => {
        state = authenticated;
    });
    /**
     * @type CarbonTheme | undefined
     */
    let theme
    onMount(() => {
        console.clear();
        let theme = localStorage.getItem("__carbon-theme") || "g80";

        console.log(theme);
        console.log(localStorage.getItem("__carbon-theme"))
        if (!state.Gauthenticated && window.location.pathname !== "/login" && window.location.pathname !== "/register") {
            window.location.href = "/login";
        }
    });


    let authenticated = true;
    let openAddPost = false

</script>

<Header company="KSH" platformName="Planner">
    <svelte:fragment slot="skip-to-content">
        <SkipToContent/>
    </svelte:fragment>
    <HeaderUtilities>
        {#if authenticated}
<!--            <Dropdown-->
<!--                    title="Theme"-->
<!--                    selectedId={theme}-->
<!--                    items={[-->
<!--                    {text: "Light", id: "white"},-->
<!--                    {text: "Grey", id: "g10"},-->
<!--                    {text: "Dark Grey", id: "g80"},-->
<!--                    {text: "Light Black", id: "g90"},-->
<!--                    {text: "Black", id: "g100"}-->
<!--                ]}-->
<!--                    on:select={e => {-->
<!--                    localStorage.setItem("__carbon-theme", e.detail.selectedItem.id);-->
<!--                    console.log(e.detail.selectedItem.id);-->
<!--                }}-->
<!--            />-->
            
            <HeaderGlobalAction
                    iconDescription="Add Event"
                    tooltipAlignment="center"
                    icon={DataEnrichmentAdd}
                    on:click={() => {
                        console.log("Add post clicked")
                        openAddPost = !openAddPost;
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
    <Popover
            align="bottom-right"
            bind:open={openAddPost}
            
    >
        <PostEdit
                on:close={() => {
                openAddPost = false;
            }}
        />
    </Popover>
</Header>
<Theme
        bind:theme persist persistKey="__carbon-theme"
/>
<Content>
    <slot>
    
    </slot>
</Content>

