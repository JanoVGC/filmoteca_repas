// Importa les utilitats per combinar configuracions Angular.
import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
// Importa les utilitats de renderitzat servidor i rutes SSR.
import { provideServerRendering, withRoutes } from '@angular/ssr';
// Importa la configuració comuna del navegador.
import { appConfig } from './app.config';
// Importa les regles de renderitzat definides per al servidor.
import { serverRoutes } from './app.routes.server';

// Defineix els providers exclusius del servidor.
const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(withRoutes(serverRoutes))
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
