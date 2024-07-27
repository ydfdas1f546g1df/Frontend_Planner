import { writable } from 'svelte/store';


// Create a writable store
export const globalState = writable({
    Guser: null,
    Gauthenticated: true,
});