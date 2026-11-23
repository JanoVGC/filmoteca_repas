import { Pelicula } from './interfaces/pelicula';

export const PELICULES: Pelicula[] = [
  {
    id: 1,
    titol: 'El Padrino',
    director: 'Francis Ford Coppola',
    any: 1972,
    durada: 175,
    genere: 'Crimen',
    valoracio: 9.2,
    disponible: false,
    cartellUrl: 'https://m.media-amazon.com/images/I/51rOnIjLqzL._AC_.jpg'
  },
  {
    id: 2,
    titol: 'El Padrino II',
    director: 'Francis Ford Coppola',
    any: 1974,
    durada: 202,
    genere: 'Crimen',
    valoracio: 9.0,
    disponible: false,
    cartellUrl: 'https://m.media-amazon.com/images/I/51rOnIjLqzL._AC_.jpg'
  },
  {
    id: 3,
    titol: 'El Padrino III',
    director: 'Francis Ford Coppola',
    any: 1990,
    durada: 162,
    genere: 'Drama',
    valoracio: 7.6,
    disponible: true,
    cartellUrl: ''
  },
  {
    id: 4,
    titol: 'Taxi Driver',
    director: 'Martin Scorsese',
    any: 1976,
    durada: 114,
    genere: 'Drama',
    valoracio: 8.2,
    disponible: true,
    cartellUrl: 'https://picsum.photos/seed/taxi/200/300'
  },
  {
    id: 5,
    titol: 'El gran Lebowski',
    director: 'Joel Coen',
    any: 1998,
    durada: 117,
    genere: 'Comèdia',
    valoracio: 8.1,
    disponible: true,
    cartellUrl: 'https://picsum.photos/seed/lebowski/200/300'
  },
  {
    id: 6,
    titol: 'Resacón en Las Vegas',
    director: 'Todd Phillips',
    any: 2009,
    durada: 100,
    genere: 'Comèdia',
    valoracio: 7.7,
    disponible: false,
    cartellUrl: 'https://picsum.photos/seed/vegas/200/300'
  }
];