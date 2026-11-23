// Importa Component i les utilitats necessaries per comunicar dades i esdeveniments.
import { Component , EventEmitter , Output , Input } from '@angular/core';
// Importa el component fill que mostra l'etiqueta visual del genere.
import { EtiquetaGenere } from '../etiqueta-genere/etiqueta-genere';
// Importa la interfície que defineix l'estructura de cada pel·lícula.
import { Pelicula } from '../../interfaces/pelicula';
// Defineix les opcions de configuracio del component FitxaPelicula.
@Component({
  // Indica que aquest component s'utilitza amb l'etiqueta app-fitxa-pelicula.
  selector: 'app-fitxa-pelicula',
  // Afegeix el component EtiquetaGenere als imports disponibles a la plantilla.
  imports: [EtiquetaGenere],
  // Indica quin fitxer HTML conté la plantilla visual de la fitxa.
  templateUrl: './fitxa-pelicula.html',
  // Indica quin fitxer CSS conté els estils exclusius de la fitxa.
  styleUrl: './fitxa-pelicula.css',
})
// Declara la classe TypeScript del component fitxa de pel·lícula.
export class FitxaPelicula {
  // Rep des del component pare la pel·lícula que s'ha de mostrar.
  // required indica que aquest input s'ha de proporcionar obligatoriament.
  @Input({ required: true }) pelicula!: Pelicula;
  // Rep des del pare el número d'ordre calculat dins de la llista.
  // required indica que aquest input s'ha de proporcionar obligatoriament.
  @Input({ required: true }) ordre!: number;

  // Declara un esdeveniment que avisa el pare quan l'usuari lloga la pel·lícula.
  @Output() llogar = new EventEmitter<Pelicula>();
  // Declara un esdeveniment que avisa el pare quan l'usuari retorna la pel·lícula.
  @Output() retornar = new EventEmitter<Pelicula>();

  // Gestiona la pulsacio del boto Llogar del component fill.
  onLlogar(): void {
    // Emet la pel·lícula actual al pare sense modificar-la directament.
    this.llogar.emit(this.pelicula);
  }

  // Gestiona la pulsacio del boto Retornar del component fill.
  onRetornar(): void {
    // Emet la pel·lícula actual al pare sense modificar-la directament.
    this.retornar.emit(this.pelicula);
  }


}
