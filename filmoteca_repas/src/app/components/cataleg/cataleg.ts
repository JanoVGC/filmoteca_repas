import { Component } from '@angular/core';
import { Pelicula } from '../../interfaces/pelicula';
import { PELICULES } from '../../pelicules';
import { FitxaPelicula } from '../fitxa-pelicula/fitxa-pelicula';

@Component({
  selector: 'app-cataleg',
  imports: [FitxaPelicula],
  templateUrl: './cataleg.html',
  styleUrl: './cataleg.css',
})
export class Cataleg {

  pelicules: Pelicula[] = PELICULES;
  cerca = '';
  ordre = 'titol';

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

  // Part 3 + modificacio Part 4

 get peliculesFiltrades(): Pelicula[] {
  const text = this.cerca.toLowerCase().trim();
  const llista = this.pelicules.filter(p => p.titol.toLowerCase().includes(text));

  if (this.ordre === 'titol') {
    llista.sort((a, b) => {
      const titolA = a.titol.toLowerCase();
      const titolB = b.titol.toLowerCase();

      if (titolA < titolB) {
        return -1;
      } else if (titolA > titolB) {
        return 1;
      }
      return 0;
    });
  } else if (this.ordre === 'any') {
    llista.sort((a, b) => a.any - b.any);
  } else if (this.ordre === 'valoracio') {
    llista.sort((a, b) => b.valoracio - a.valoracio);
  } else if (this.ordre === 'durada') {
    llista.sort((a, b) => a.durada - b.durada);
  }

  return llista;
}

onOrdre(valor: string): void {
  this.ordre = valor;
}
  onCerca(valor: string): void {
    this.cerca = valor;
  }

  llogar(p: Pelicula): void {
    p.disponible = false; 
  }

  retornar(p:Pelicula): void {
    p.disponible = true; 
  }





}
