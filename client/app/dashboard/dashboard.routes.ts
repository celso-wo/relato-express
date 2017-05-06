import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { EntradaComponent } from './entrada/entrada.component';

export const MODULE_ROUTES: Route[] = [
  { path: 'entrada', component: EntradaComponent },
  { path: 'dashboard', component: HomeComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
]

export const MODULE_COMPONENTS = [
  HomeComponent,
  EntradaComponent
]
