import { Routes } from '@angular/router';



export const routes = [
  { path: 'main', loadComponent: () => import('./main/main.page').then(m => m.MainPage) },

  {
    path: 'paciente',
    loadComponent: () => import('./paciente/paciente.page').then( m => m.PacientePage)
  }

];
