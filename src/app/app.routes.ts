import { Routes } from '@angular/router';



export const routes = [
  { path: 'main', loadComponent: () => import('./main/main.page').then(m => m.MainPage) },

  {
    path: 'paciente',
    loadComponent: () => import('./paciente/paciente.page').then( m => m.PacientePage)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.page').then( m => m.DashboardPage)
  },
  {
    path: 'centro',
    loadComponent: () => import('./centro/centro.page').then( m => m.CentroPage)
  },
  {
    path: 'datos',
    loadComponent: () => import('./datos/datos.page').then( m => m.DatosPage)
  }

];
