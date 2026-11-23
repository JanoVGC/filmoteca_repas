// Importa la funció Angular que arrenca l'aplicació al navegador.
import { bootstrapApplication } from '@angular/platform-browser';
// Importa la configuració comuna de l'aplicació.
import { appConfig } from './app/app.config';
// Importa el component arrel que es mostrarà primer.
import { App } from './app/app';

// Arrenca App amb appConfig i registra els errors al navegador.
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
