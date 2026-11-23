import { Component } from '@angular/core';
import { Pelicula } from '../../interfaces/pelicula';
import { PELICULES } from '../../pelicules';

@Component({
  selector: 'app-cataleg',
  imports: [],
  templateUrl: './cataleg.html',
  styleUrl: './cataleg.css',
})
export class Cataleg {

  pelicules: Pelicula[] = PELICULES;

  get total(): number {
    return this.pelicules.length;
  }

  get totalDisponibles(): number {
    return this.pelicules.filter(p => p.disponible).length;
  }

  get DuradaTotal(): string {
    let minuts = this.pelicules.reduce((suma, p) => suma + p.durada, 0);
    let hores = 0;

      while (minuts >= 60) {
        minuts -= 60;
        hores++;  
      }

      return `${hores} h ${minuts} min`;

    }

  get valoracioMitjana(): string {
    if (this.pelicules.length === 0) return '0.0';

   let suma = 0;
    for (const p of this.pelicules) {
      suma += p.valoracio;
    }

    return (suma / this.pelicules.length).toFixed(1);


  }



}
