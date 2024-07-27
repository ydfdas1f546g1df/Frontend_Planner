<script lang="ts">
    import {Popover} from "carbon-components-svelte";
    import {Button, StructuredListCell, StructuredListRow} from "carbon-components-svelte";
    import ChevronUpOutline from "carbon-icons-svelte/lib/ChevronUpOutline.svelte";
    import ChevronDownOutline from "carbon-icons-svelte/lib/ChevronDownOutline.svelte";
    import "./Post.less";
    import PostEdit from "$lib/components/postEdit/PostEdit.svelte";
    import type {Post} from "$lib/typedef/typedef";
    import type {ButtonProps} from "carbon-components-svelte/src/Button/Button.svelte";


    export let post : Post;

    export let personalVote = 0;

    type kind = ButtonProps["kind"];

    let buttonUpKind : kind = "secondary";

    let buttonDownKind : kind = "secondary";


    let popoversView = new Map();
    let popoversEdit = new Map();
    $: viewPopoverOpen = getPopover(post.ID, popoversView);
    $: editPopoverOpen = getPopover(post.ID, popoversEdit);
    
    function togglePopover(id: number, popovers: Map<number, boolean>) {
        //console.log("Toggling popover: " + id);
        const newPopovers = new Map(popovers);
        newPopovers.set(id, !newPopovers.get(id));
        if (popovers === popoversView) {
            popoversView = newPopovers;
        } else if (popovers === popoversEdit) {
            popoversEdit = newPopovers;
        }
    }



    function getPopover(id: number, popovers: Map<number, boolean>) {
        //console.log("Getting popover: " + id);
        return popovers.get(id);
    }


    function upvote() {

        if (personalVote === 0 || personalVote === -1) {
            buttonUpKind = "primary";
            buttonDownKind = "secondary";
            personalVote = 1;
        } else if (personalVote === 1) {
            buttonUpKind = "secondary";
            personalVote = 0;
        }
    }

    function downVote() {

        if (personalVote === 0 || personalVote === 1) {
            buttonDownKind = "danger";
            buttonUpKind = "secondary";
            personalVote = -1;
        } else if (personalVote === -1) {
            buttonDownKind = "secondary";
            personalVote = 0;
        }
    }

    
</script>


<StructuredListRow>
    
    
    <StructuredListCell>
        <Button on:click={upvote} icon={ChevronUpOutline} kind={buttonUpKind} iconDescription="Upvote"
                tooltipAlignment="center"
                tooltipPosition="right"/>
        <p class="Votes">{post.TotalVotes + personalVote} votes</p>
        <Button on:click={downVote} icon={ChevronDownOutline} kind={buttonDownKind} iconDescription="Down-vote"
                tooltipAlignment="center"
                tooltipPosition="right"/>
    </StructuredListCell>
    <StructuredListCell>
        <div class="post-header">
            <h2 class="post-title">{post.Title}</h2>
        </div>
        <div class="post-content">
            <p>{post.ShortContent}</p>
        </div>
        <br/>
        <p class="post-creator">Created by {post.OwnerUsername}</p>
        <p class="post-timestamp">{post.Timestamp}</p>
    </StructuredListCell>
    <StructuredListCell>
        <Button kind="secondary" on:click={() =>{
                togglePopover(post.ID, popoversView)
            
            
        }}>View
            
            <Popover
                    open={viewPopoverOpen}
                    align="bottom-right"
            
            >
                {post.Content}
            </Popover>
        </Button>
        
        {#if true}
            <Button style="margin-top: 0.5rem"
                    disabled={getPopover(post.ID, popoversEdit)}
                    on:click={() =>{
                togglePopover(post.ID, popoversEdit)
            }}>Edit
                <Popover
                        open={editPopoverOpen}
                        align="bottom-right"
                >
                    <PostEdit post={post} on:close={() =>{togglePopover(post.ID, popoversEdit)}}/>
                </Popover>
            </Button>
            
            
        {/if}
    
    </StructuredListCell>
    
</StructuredListRow>

<style>

</style>