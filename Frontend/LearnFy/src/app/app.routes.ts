import { Routes } from '@angular/router';
import { MasterComponent } from './layout/master/master.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: MasterComponent,
    children: [
      { path: '', component: HomeComponent },
      //{ path: 'courses', loadComponent: () => import('./pages/courses/courses.component').then(m => m.CoursesComponent) },
      //{ path: 'about', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent) },
      //{ path: 'contact', loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent) },
      //{ path: 'register', loadComponent: () => import('./pages/register/register.component').then(m => m.RegisterComponent) },
      { path: '**', redirectTo: '', pathMatch: 'full' } // Redirección de rutas no encontradas
    ]
  }
];
