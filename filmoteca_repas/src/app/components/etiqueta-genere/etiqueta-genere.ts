// Importa Component i Input per declarar el component i rebre dades del pare.
import { Component , Input} from '@angular/core';

// Configura el component d'etiqueta del gènere.
@Component({
  selector: 'app-etiqueta-genere',
  imports: [],
  templateUrl: './etiqueta-genere.html',
  styleUrl: './etiqueta-genere.css',
})
export class EtiquetaGenere {

  // Rep el nom del gènere des del component FitxaPelicula.
  @Input ({required: true }) genere!: string; 

  // Getter que associa un color hexadecimal al gènere.
  get color(): string {
    
    // Retorna vermell per al gènere Crimen.
    if (this.genere === 'Crimen') {
      return '#c0392b';
    // Retorna gris fosc per al gènere Terror.
    } else if (this.genere === 'Terror') {
      return '#2c3e50';
    // Retorna taronja per a les dues grafies de Comèdia.
    } else if (this.genere === 'Comedia' || this.genere === 'Comèdia') {
      return '#e67e22';
    // Retorna blau per al gènere Drama.
    } else if (this.genere === 'Drama') {
      return '#2980b9';
    // Retorna morat per al gènere Thriller.
    } else if (this.genere === 'Thriller') {
      return '#8e44ad';
    }
    // Retorna gris per als generes no reconeguts.
    return '#7f8c8d'; // gènere desconegut
  }
  }
