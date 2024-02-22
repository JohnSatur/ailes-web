import { Post } from "./post.type";

/**
 * Type para la de preview de cada post. Solo contiene la información necesaria para desplegar las tarjetas en las diferentes secciones de la página.
 * 
 * @type
 */
export type PostPreview = Pick<Post, 'title' | 'slug' | 'publicationDate' | 'thumbnail' | 'summary'>;