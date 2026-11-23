import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-etiqueta-genere',
  imports: [],
  templateUrl: './etiqueta-genere.html',
  styleUrl: './etiqueta-genere.css',
})
export class EtiquetaGenere {

  @Input ({required: true }) genere!: string; 

  get color(): string {
    
    if (this.genere === 'Crimen') {
      return '#c0392b';
    } else if (this.genere === 'Terror') {
      return '#2c3e50';
    } else if (this.genere === 'Comedia' || this.genere === 'Comèdia') {
      return '#e67e22';
    } else if (this.genere === 'Drama') {
      return '#2980b9';
    } else if (this.genere === 'Thriller') {
      return '#8e44ad';
    }
    return '#7f8c8d'; // gènere desconegut
  }
  }
