/**
 * Interfaz para las imágenes dentro del carrusel de logos de universidades.
 * 
 * @property {string} imgUrl - URL de la imagen dentro de la carpeta de assets.
 * @property {string} [altTag] - Contenido dentro de la propiedad alt (suele tener el formato "Logo " + Arcónimo)
 * 
 * @interface
 */
export interface UniversityLogo {
    imgUrl: string;
    altTag?: string;
}
