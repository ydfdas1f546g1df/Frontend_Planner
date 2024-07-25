<script>

    
    import '$lib/main.less'
    import {
        Content,
        Grid,
        Row,
        Column, StructuredList, StructuredListRow, StructuredListCell
    } from "carbon-components-svelte";
    import UserPost from "$lib/components/post/Post.svelte";


    let Posts = [{
        id: 1,
        title: "Post 1",
        content: "This is the content of post 1",
        creator: "Creator 1",
        creatorID: 1,
        shortDesc: "This is the shortDesc of post 1",
        timestamp: "2021-09-01 12:00:00",
        votes: 0
    }, {
        id: 1,
        title: "Post 1",
        content: "This is the content of post 1",
        creator: "Creator 1",
        creatorID: 1,
        shortDesc: "This is the shortDesc of post 1",
        timestamp: "2021-09-01 12:00:00",
        votes: 10
    },];
</script>


<Content>
    <h1>Events</h1>
    <StructuredList>
        {#each Posts as post}
            <UserPost post={post} ></UserPost>
        {/each}
    </StructuredList>
</Content>