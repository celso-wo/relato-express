import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { KzMaskDirective } from './directives/kz-mask.directive';
import { MODULE_COMPONENTS, MODULE_ROUTES } from './dashboard.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(MODULE_ROUTES)
  ],
  declarations: [MODULE_COMPONENTS, KzMaskDirective]
})

export class DashboardModule { }
