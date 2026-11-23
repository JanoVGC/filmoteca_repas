import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pelicula } from './interfaces/pelicula';
import { Cataleg } from './components/cataleg/cataleg';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Cataleg],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('filmoteca_repas');


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
