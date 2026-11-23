// Importa el decorador necessari per declarar aquest component Angular.
import { Component } from '@angular/core';
// Importa el model Tipus que representa una pel·lícula.
import { Pelicula } from '../../interfaces/pelicula';
// Importa les dades compartides del catàleg.
import { PELICULES } from '../../pelicules';
// Importa el component fill que mostra cada fitxa de pel·lícula.
import { FitxaPelicula } from '../fitxa-pelicula/fitxa-pelicula';

// Configura el component Cataleg i la seva plantilla.
@Component({
  selector: 'app-cataleg',
  imports: [FitxaPelicula],
  templateUrl: './cataleg.html',
  styleUrl: './cataleg.css',
})
// Conté les dades i la logica del catàleg.
export class Cataleg {

  // Guarda el catàleg complet en un array tipat de Pelicula.
  pelicules: Pelicula[] = PELICULES;
  // Guarda el text escrit pel cercador.
  cerca = '';
  // Guarda el criteri d'ordenació seleccionat.
  ordre = 'titol';

  // Getter que retorna el nombre total de pel·lícules.
  get total(): number {
    return this.pelicules.length;
  }

  // Getter que conta les pel·lícules disponibles.
  get totalDisponibles(): number {
    return this.pelicules.filter(p => p.disponible).length;
  }

  // Getter que transforma la suma de durades en hores i minuts.
  get DuradaTotal(): string {
    let minuts = this.pelicules.reduce((suma, p) => suma + p.durada, 0);
    let hores = 0;

      while (minuts >= 60) {
        minuts -= 60;
        hores++;  
      }

      // Retorna el text del resum amb el format demanat.
      return `${hores} h ${minuts} min`;

    }

  // Getter que calcula i formatat la valoracio mitjana amb un decimal.
  get valoracioMitjana(): string {
    // Evita dividir per zero si el catàleg està buit.
    if (this.pelicules.length === 0) return '0.0';

   let suma = 0;
    // Recorre totes les pel·lícules acumulant les valoracions.
    for (const p of this.pelicules) {
      suma += p.valoracio;
    }

    // Divideix la suma pel nombre d'elements i en limita el format a un decimal.
    return (suma / this.pelicules.length).toFixed(1);


  }

  // Getter que filtra i ordena la llista segons els controls de la plantilla.

 get peliculesFiltrades(): Pelicula[] {
  // Normalitza el text perquè la cerca no sigui sensible a majuscules.
  const text = this.cerca.toLowerCase().trim();
  // Conserva només les pel·lícules amb un titol que contingui el text.
  const llista = this.pelicules.filter(p => p.titol.toLowerCase().includes(text));

  // Ordena alfabèticament si el valor seleccionat és titol.
  if (this.ordre === 'titol') {
    llista.sort((a, b) => {
      const titolA = a.titol.toLowerCase();
      const titolB = b.titol.toLowerCase();

      // Situa titolA abans de titolB.
      if (titolA < titolB) {
        return -1;
      // Situa titolA després de titolB.
      } else if (titolA > titolB) {
        return 1;
      }
      // Conserva l'ordre si els dos titols coincideixen.
      return 0;
    });
  // Ordena els anys d'estrena d'antic a modern.
  } else if (this.ordre === 'any') {
    llista.sort((a, b) => a.any - b.any);
  // Ordena les valoracions de major a menor.
  } else if (this.ordre === 'valoracio') {
    llista.sort((a, b) => b.valoracio - a.valoracio);
  // Ordena les durades de menor a major.
  } else if (this.ordre === 'durada') {
    llista.sort((a, b) => a.durada - b.durada);
  }

  // Retorna la llista ja filtrada i ordenada.
  return llista;
}

// Actualitza el criteri d'ordenació quan canvia el select.
onOrdre(valor: string): void {
  this.ordre = valor;
}
  // Actualitza el text de cerca quan escriu l'usuari.
  onCerca(valor: string): void {
    this.cerca = valor;
  }

  // Rep la pel·lícula del fill i la marca com a no disponible.
  llogar(p: Pelicula): void {
    p.disponible = false; 
  }

  // Rep la pel·lícula del fill i la torna a marcar com a disponible.
  retornar(p:Pelicula): void {
    p.disponible = true; 
  }





}
