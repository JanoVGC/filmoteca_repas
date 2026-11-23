// Importa els tipus i modes disponibles per al renderitzat SSR.
import { RenderMode, ServerRoute } from '@angular/ssr';

// Defineix una ruta comodí que es prerenderitza en forma estàtica.
export const serverRoutes: ServerRoute[] = [
  {
    path: '**',
    renderMode: RenderMode.Prerender
  }
];
