<script>
    import {Button, TextArea, Form, FormGroup, TextInput} from "carbon-components-svelte";
    import { createEventDispatcher } from 'svelte';
    /**
     *
     * @typedef {Object} Post
     * @property {number} ID - The unique identifier for the post.
     * @property {string} Title - The title of the post.
     * @property {string} Content - The content of the post.
     * @property {string} ShortContent - A short description of the post.
     * @property {number} Owner - The unique identifier for the owner of the post.
     * @property {string} Timestamp - The timestamp of when the post was created.
     * @property {string} OwnerUsername - The name of the owner of the post.
     * @property {number} TotalVotes - The total number of votes the post has.
     * @property {number} Upvotes - The total number of upvotes the post has.
     * @property {number} Downvotes - The total number of downvotes the post has.
     *
     *

     */
    /**
     * @type Post
     */
    export let post = {}


    let title = post?.Title || '';
    let content = post?.Content || '';
    let shortContent = post?.ShortContent || '';
    const dispatch = createEventDispatcher();

    /**
     *
     * @param e {Event}
     */
    function close(e){
        e.preventDefault();
        dispatch('close');
    }
    /**
     *
     * @param e {Event}
     */
    function handleSubmit(e){
        console.log(e.type)
    }
    
</script>


<Form style="padding-top: .1rem" on:submit={handleSubmit}>
    <FormGroup style="margin: 1rem">
        <TextInput labelText="Title" bind:value={post.Title} />
        <TextArea
                labelText="Short Content"
                bind:value={post.ShortContent}
        />
        <TextArea
        labelText="Content"
        bind:value={post.Content}
        />
    </FormGroup>
    <Button style="margin-bottom: 1rem; margin-left:1rem" type="submit">Submit</Button>
    <Button on:click={close} style="margin-right: 1rem;margin-left: .5rem" kind="tertiary">Close</Button>
</Form>

