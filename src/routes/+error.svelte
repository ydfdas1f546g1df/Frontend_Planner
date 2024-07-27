<script lang="ts">
    import { page } from '$app/stores';
    import {Content, InlineNotification, NotificationActionButton} from "carbon-components-svelte";
</script>

<Content>
    <InlineNotification
            title="Error: {$page.status}"
            kind="error"
            hideCloseButton={true}
            subtitle="{$page.error.message}"
            role="alert"
    />
    <NotificationActionButton
    on:click={() => window.location.href = "/"}
    >
        Go back to Homepage
    </NotificationActionButton>
    
</Content>
