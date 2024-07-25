<script>
    import '$lib/main.less'
    import HeaderComponent from "$lib/components/headercomponent/HeaderComponent.svelte";
    import {
        Content,
        Grid,
        Row,
        Column
    } from "carbon-components-svelte";
    import UserPost from "$lib/components/headercomponent/Post.svelte";
    let authenticated = false;
    
    let Posts = [{
        id: 1,
        title: "Post 1",
        content: "This is the content of post 1",
        timestamp: "2021-09-01 12:00:00",
        votes: 0
    }];
</script>

<HeaderComponent authenticated={authenticated}/>

<Content>
    <h1>Events</h1>
    <Grid>
        {#each Posts as post}
            <Row>
                <Column>
                    <UserPost post={post}></UserPost>
                </Column>
            </Row>
        {/each}
    </Grid>
</Content>