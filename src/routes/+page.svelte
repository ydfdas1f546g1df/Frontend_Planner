<script lang="ts">

    import '$lib/main.less'
    import { onMount } from "svelte";
    import "$lib/backendGetter.js"
    import {
        Grid,
        Row,
        Column, StructuredList, StructuredListRow, StructuredListCell
    } from "carbon-components-svelte";
    import UserPost from "$lib/components/post/Post.svelte";
    import UserPostLoading from "$lib/components/post/loadingPost.svelte";
    import {getPosts} from "$lib/backendGetter.js";

    let loading = false;
    let Posts = [{
        ID: 0,
        Title: "",
        Content: "",
        ShortContent: "",
        Owner: 0,
        Timestamp: "",
        OwnerUsername: "",
        TotalVotes: 0,
        Upvotes: 0,
        Downvotes: 0
    
    }];
    
    onMount(async () => {
        loading = true;
        Posts = await getPosts();
        loading = false;
        
    })
    
</script>


<h1>Events</h1>
<StructuredList>
    {#if loading}
        {#each [1,2,3,4,5] as i}
            <StructuredListRow>
                <StructuredListCell>
                    <UserPostLoading></UserPostLoading>
                </StructuredListCell>
            </StructuredListRow>
        {/each}
    {:else}
        {#each Posts as post}
            <UserPost post={post}></UserPost>
        {/each}
    {/if}

</StructuredList>