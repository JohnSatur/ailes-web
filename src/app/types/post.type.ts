/**
 * Representación del type para los posts del blog
 * @type
 * @property {string} title - Título.
 * @property {string} [subtitle] - Subtítulo opcional.
 * @property {string} thumbnail - URL a la imagen del thumbnail del post.
 * @property {string} publicationDate - Fecha de publicación en formato ISO 8601.
 * @property {string} slug - Slug único para la URL del post.
 * @property {string} content - El contenido del post en formato Markdown.
 * @property {summary} summary - Fragmento que se quiere mostrar en las tarjetas del post.
 */
export type Post = {
    title: string,
    subtitle?: string,
    thumbnail: string,
    publicationDate: string,
    slug: string,
    content: string,
    summary: string,
};
