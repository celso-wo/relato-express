import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { EntradaComponent } from './entrada/entrada.component';

export const MODULE_ROUTES: Route[] = [
  { path: 'entrada', component: EntradaComponent },
  { path: 'dashboard/:cnpj', component: HomeComponent },
  { path: '', redirectTo: 'entrada', pathMatch: 'full' }
]

export const MODULE_COMPONENTS = [
  HomeComponent,
  EntradaComponent
]
