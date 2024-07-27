<script>
    /**
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
     * @typedef {"primary"
     *     | "secondary"
     *     | "tertiary"
     *     | "ghost"
     *     | "danger"
     *     | "danger-tertiary"
     *     | "danger-ghost"} kind
     *
     */
    import {Popover, ToastNotification} from "carbon-components-svelte";
    import {Button, StructuredList, StructuredListCell, StructuredListRow} from "carbon-components-svelte";
    import ChevronUpOutline from "carbon-icons-svelte/lib/ChevronUpOutline.svelte";
    import ChevronDownOutline from "carbon-icons-svelte/lib/ChevronDownOutline.svelte";
    import "./Post.less";
    import PostEdit from "$lib/components/postEdit/PostEdit.svelte";

    /** @type Post */
    export let post;

    export let personalVote = 0;

    /** @type {kind} */
    let buttonUpkind = "secondary";
    /** @type {kind} */
    let buttonDownkind = "secondary";


    let popoversView = new Map();
    let popoversEdit = new Map();
    $: viewPopoverOpen = getPopover(post.ID, popoversView);
    $: editPopoverOpen = getPopover(post.ID, popoversEdit);

    /**
     *
     * @param id {number}
     * @param popovers {Map<number, boolean>}
     */
    function togglePopover(id, popovers) {
        //console.log("Toggling popover: " + id);
        const newPopovers = new Map(popovers);
        newPopovers.set(id, !newPopovers.get(id));
        if (popovers === popoversView) {
            popoversView = newPopovers;
        } else if (popovers === popoversEdit) {
            popoversEdit = newPopovers;
        }
    }


    /**
     *
     * @param id {number}
     * @param popovers {Map<number, boolean>}
     */
    function getPopover(id, popovers) {
        //console.log("Getting popover: " + id);
        return popovers.get(id);
    }


    function upvote() {

        if (personalVote === 0 || personalVote === -1) {
            buttonUpkind = "primary";
            buttonDownkind = "secondary";
            personalVote = 1;
        } else if (personalVote === 1) {
            buttonUpkind = "secondary";
            personalVote = 0;
        }
    }

    function downvote() {

        if (personalVote === 0 || personalVote === 1) {
            buttonDownkind = "danger";
            buttonUpkind = "secondary";
            personalVote = -1;
        } else if (personalVote === -1) {
            buttonDownkind = "secondary";
            personalVote = 0;
        }
    }

    /**
     *
     * @param event {Event}
     */
    function handleInnerElementClick(event) {
        event.stopPropagation();
        alert('Inner element clicked!');
    }
</script>


<StructuredListRow>
    
    
    <StructuredListCell>
        <Button on:click={upvote} icon={ChevronUpOutline} kind={buttonUpkind} iconDescription="Upvote"
                tooltipAlignment="center"
                tooltipPosition="right"/>
        <p class="Votes">{post.TotalVotes + personalVote} votes</p>
        <Button on:click={downvote} icon={ChevronDownOutline} kind={buttonDownkind} iconDescription="Downvote"
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