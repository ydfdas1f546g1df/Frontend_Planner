<script>
    /**
     * @typedef {Object} Post
     * @property {number} id - The unique identifier for the post.
     * @property {number} creatorID - The title of the post.
     * @property {string} creator - The creator of the post.
     * @property {string} title - The title of the post.
     * @property {string} shortDesc - A short description of the post.
     * @property {string} content - The content of the post.
     * @property {string} timestamp - The timestamp of when the post was created.
     * @property {number} votes - The number of votes the post has received.
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
    import {Button, StructuredList, StructuredListCell, StructuredListRow} from "carbon-components-svelte";
    import ChevronUpOutline from "carbon-icons-svelte/lib/ChevronUpOutline.svelte";
    import ChevronDownOutline from "carbon-icons-svelte/lib/ChevronDownOutline.svelte";
    import "./Post.less";
    /** @type {Post} */
    export let post;

    export let personalVote = 0;

    /** @type {kind} */
    let buttonUpkind = "secondary";
    /** @type {kind} */
    let buttonDownkind = "secondary";
    

    
    function upvote() {
        if (personalVote === 0 || personalVote === -1) {
            buttonUpkind = "primary";
            buttonDownkind = "secondary";
            personalVote = 1;
        }
        else if(personalVote === 1)
        {
            buttonUpkind = "secondary";
            personalVote = 0;
        }
    }

    function downvote() {
        if (personalVote === 0 || personalVote === 1) {
            buttonDownkind = "danger";
            buttonUpkind = "secondary";
            personalVote = -1;
        }
        else if(personalVote === -1)
        {
            buttonDownkind = "secondary";
            personalVote = 0;
        }
    }
</script>


<StructuredListRow>
    
    <StructuredListCell>
        <Button on:click={upvote}  icon={ChevronUpOutline} kind={buttonUpkind} iconDescription="Upvote" tooltipAlignment="center"
                tooltipPosition="right"/>
        <p class="Votes">{post.votes + personalVote} votes</p>
        <Button on:click={downvote} icon={ChevronDownOutline} kind={buttonDownkind} iconDescription="Downvote" tooltipAlignment="center"
                tooltipPosition="right"/>
    </StructuredListCell>
    <StructuredListCell>
        <div class="post-header">
            <h2 class="post-title">{post.title}</h2>
        </div>
        <div class="post-content">
            <p>{post.shortDesc}</p>
        </div>
        <br/>
        <p class="post-creator">Created by {post.creator}</p>
        <p class="post-timestamp">{post.timestamp}</p>
    </StructuredListCell>
    <StructuredListCell>
        <Button kind="secondary" on:click={() => window.location.href = `/post/${post.id}`}>View</Button>
    </StructuredListCell>
</StructuredListRow>

<style >

</style>