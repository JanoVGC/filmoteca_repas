import { Component , EventEmitter , Output , Input } from '@angular/core';
import { EtiquetaGenere } from '../etiqueta-genere/etiqueta-genere';
import { Pelicula } from '../../interfaces/pelicula';
@Component({
  selector: 'app-fitxa-pelicula',
  imports: [EtiquetaGenere],
  templateUrl: './fitxa-pelicula.html',
  styleUrl: './fitxa-pelicula.css',
})
export class FitxaPelicula {
  @Input({ required: true }) pelicula!: Pelicula;
  @Input({ required: true }) ordre!: number;

  @Output() llogar = new EventEmitter<Pelicula>();
  @Output() retornar = new EventEmitter<Pelicula>();

  onLlogar(): void {
    this.llogar.emit(this.pelicula);
  }

  onRetornar(): void {
    this.retornar.emit(this.pelicula);
  }


}
