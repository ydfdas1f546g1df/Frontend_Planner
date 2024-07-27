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
 * @typedef {Object} User
 * @property {number} id - The unique identifier for the user.
 * @property {string} username - The username of the user.
 * @property {string} email - The email of the user.
 *
 * @typedef {Object} Comment
 * @property {number} id - The unique identifier for the comment.
 * @property {number} postID - The unique identifier for the post.
 * @property {number} creatorID - The unique identifier for the creator.
 * @property {string} creator - The creator of the comment.
 * @property {string} content - The content of the comment.
 * @property {string} timestamp - The timestamp of when the comment was created.
 *
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