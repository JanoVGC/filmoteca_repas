// Importa els tipus i providers base de configuració Angular.
import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
// Importa el provider que activa el sistema de rutes.
import { provideRouter } from '@angular/router';

// Importa la llista de rutes de l'aplicació.
import { routes } from './app.routes';
// Importa la configuració d'hidratació i reproducció d'esdeveniments.
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

// Exporta la configuració compartida del navegador i del servidor.
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes), provideClientHydration(withEventReplay())
  ]
};
