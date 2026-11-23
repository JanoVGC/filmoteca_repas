// Interfície que defineix totes les dades necessaries per representar una pel·lícula.
export interface Pelicula {
    // Identificador únic utilitzat també per l'atribut track.
    id: number;
    // Títol textual de la pel·lícula.
    titol: string;
    // Nom del director o directora.
    director: string;
    // Any d'estrena.
    any: number;
    // Durada expressada en minuts.
    durada: number;
    // Nom textual del gènere.
    genere: string;
    // Valoració numèrica dins de l'escala de 0 a 10.
    valoracio: number;
    // Indica si la pel·lícula està disponible o llogada.
    disponible: boolean;
    // Conté la URL del cartell; pot estar buida.
    cartellUrl: string;
}