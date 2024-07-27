<script lang="ts">
    import {Button, TextArea, Form, FormGroup, TextInput} from "carbon-components-svelte";
    import { createEventDispatcher } from 'svelte';
    import type {Post} from "$lib/typedef/typedef.ts";

    
    export let post :Post = {}


    let title = post?.Title || '';
    let content = post?.Content || '';
    let shortContent = post?.ShortContent || '';
    const dispatch = createEventDispatcher();


    function close(e){
        e.preventDefault();
        dispatch('close');
    }

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

