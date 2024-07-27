import { writable } from 'svelte/store';

/**
 *
 *
 * @typedef {Object} GlobalState
 * @property {boolean} Gauthenticated - The authentication status of the user.
 * @property {User | null} Guser - The user object.
 */

// Create a writable store
export const globalState = writable({
    Guser: null,
    Gauthenticated: true,
});