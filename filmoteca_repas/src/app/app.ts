// Importa Component i signal per construir el component arrel.
import { Component, signal } from '@angular/core';
// Importa RouterOutlet per mantenir disponible el sistema de rutes Angular.
import { RouterOutlet } from '@angular/router';
// Importa la interfície Pelicula per tipar un array d'exemple.
import { Pelicula } from './interfaces/pelicula';
// Importa el component Cataleg que es mostra a la plantilla principal.
import { Cataleg } from './components/cataleg/cataleg';
// Configura el component arrel de l'aplicació.
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Cataleg],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
// Declara la classe App, punt d'entrada visual de l'aplicació.
export class App {
  // Defineix el titol intern reactiu del projecte Angular.
  protected readonly title = signal('filmoteca_repas');


  // Array local d'exemple; el catàleg real s'obté des de pelicules.ts.
  items: Pelicula[] = [
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
      genere: 'Terror',
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
      genere: 'Comedia',
      valoracio: 7.6,
      disponible: true,
      cartellUrl: ''

    }
    ]







}
