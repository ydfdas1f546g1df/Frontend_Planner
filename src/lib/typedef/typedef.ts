

export interface Post {
    ID: number;
    Title: string;
    Content: string;
    ShortContent: string;
    Owner: number;
    Timestamp: string;
    OwnerUsername: string;
    TotalVotes: number;
    Upvotes: number;
    Downvotes: number;
}
// Define the Comment type
export interface Comment {
    id: number;
    postID: number;
    creatorID: number;
    creator: string;
    content: string;
    timestamp: string;
}