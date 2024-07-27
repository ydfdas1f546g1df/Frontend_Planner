<script>
    import '$lib/typedef/typedef.js'
    import {SkeletonText, ToastNotification} from "carbon-components-svelte";
    import {Button, StructuredList, StructuredListCell, StructuredListRow} from "carbon-components-svelte";
    import ChevronUpOutline from "carbon-icons-svelte/lib/ChevronUpOutline.svelte";
    import ChevronDownOutline from "carbon-icons-svelte/lib/ChevronDownOutline.svelte";
    import "./Post.less";

</script>


<StructuredListRow>
    
    <StructuredListCell>
        <Button icon={ChevronUpOutline} kind="tertiary" iconDescription="Upvote" tooltipAlignment="center"
                tooltipPosition="right"/>
        <SkeletonText/>
        <Button icon={ChevronDownOutline} kind="tertiary" iconDescription="Downvote" tooltipAlignment="center"
                tooltipPosition="right"/>
    </StructuredListCell>
    <StructuredListCell>
        <div class="post-header">
            <h2 class="post-title">
                <SkeletonText/>
            </h2>
        </div>
        <div class="post-content">
            <SkeletonText paragraph/>
        </div>
        <br/>
        <SkeletonText/>
        <SkeletonText/>
    </StructuredListCell>
    <StructuredListCell>
        <Button kind="secondary" ><SkeletonText/></Button>
    </StructuredListCell>
</StructuredListRow>

<style>

</style>