<script lang="ts">
    import { page } from '$app/stores';
    import { Content, InlineNotification, NotificationActionButton } from 'carbon-components-svelte';
    import { onMount } from 'svelte';

    let status: number;
    let message: string;

    onMount(() => {
        const pageStore = $page;
        status = pageStore.status || 500;
        message = pageStore.error?.message || 'An unknown error occurred';
    });
</script>

<Content>
    <InlineNotification
            title="Error: {status}"
            kind="error"
            hideCloseButton={true}
            subtitle="{message}"
            role="alert"
    />
    <NotificationActionButton on:click={() => window.location.href = '/'}>
        Go back to Homepage
    </NotificationActionButton>
</Content>

