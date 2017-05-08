import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { KzMaskDirective } from './directives/kz-mask.directive';
import { ChartsModule } from 'ng2-charts';
import { MODULE_COMPONENTS, MODULE_ROUTES } from './dashboard.routes';

@NgModule({
  imports: [
    ChartsModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(MODULE_ROUTES)
  ],
  declarations: [MODULE_COMPONENTS, KzMaskDirective]
})

export class DashboardModule { }
