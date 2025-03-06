import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { MasterComponent } from './app/layout/master/master.component'; // ✅ Importa el MasterComponent
import { routes } from './app/app.routes';

bootstrapApplication(MasterComponent, {
  providers: [provideRouter(routes)]
});
