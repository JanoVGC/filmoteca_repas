// Importa el context i la funció d'arrencada del renderitzat servidor.
import { BootstrapContext, bootstrapApplication } from '@angular/platform-browser';
// Importa el component arrel Angular.
import { App } from './app/app';
// Importa la configuració específica del servidor.
import { config } from './app/app.config.server';

// Crea una funció d'arrencada que rep el context de renderitzat.
const bootstrap = (context: BootstrapContext) =>
    bootstrapApplication(App, config, context);

export default bootstrap;
