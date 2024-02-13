import { Post } from "./post.type";

export type PostPreview = Pick<Post, 'title' | 'slug' | 'publicationDate' | 'thumbnail' | 'summary'>;