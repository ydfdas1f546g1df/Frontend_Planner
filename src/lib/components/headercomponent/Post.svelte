<script>
    /**
     * @typedef {Object} Post
     * @property {number} id - The unique identifier for the post.
     * @property {string} title - The title of the post.
     * @property {string} content - The content of the post.
     * @property {string} timestamp - The timestamp of when the post was created.
     * @property {number} votes - The number of votes the post has received.
     */
    import {Button} from "carbon-components-svelte";
    import ChevronUpOutline from "carbon-icons-svelte/lib/ChevronUpOutline.svelte";
    import ChevronDownOutline from "carbon-icons-svelte/lib/ChevronDownOutline.svelte";

    /** @type {Post} */
    export let post;

    let personalVote = 0;

    function upvote() {
        if (personalVote === 0 || personalVote === -1) {
            personalVote = 1;
        }
        else if(personalVote === 1)
        {
            personalVote = 0;
        }
    }

    function downvote() {
        if (personalVote === 0 || personalVote === 1) {
            personalVote = -1;
        }
        else if(personalVote === -1)
        {
            personalVote = 0;
        }
    }
</script>


<div class="post-container">
    <div class="post-header">
        <h2 class="post-title">{post.title}</h2>
    </div>
    <div class="post-content">
        <p>{post.content}</p>
    </div>
    <p class="post-timestamp">{post.timestamp}</p>
    <div class="post-votes">
        <Button on:click={upvote}  icon={ChevronUpOutline} iconDescription="Upvote" tooltipAlignment="center"
                tooltipPosition="right"/>
        <p>{post.votes + personalVote} votes</p>
        <Button on:click={downvote} icon={ChevronDownOutline} iconDescription="Downvote" tooltipAlignment="center"
                tooltipPosition="right"/>
    </div>
</div>