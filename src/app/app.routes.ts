import { Routes } from '@angular/router';
import { LibroComponent } from './component/libro/libro.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Página principal',
  },
  {
    path: 'libro',
    component: LibroComponent,
    title: 'Soy Libro',
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];
