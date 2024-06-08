import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { CarteleraComponent } from './cartelera/cartelera.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CarteleraComponent],
  imports: [CommonModule, DashboardRoutingModule, SharedModule],
})
export class DashboardModule {}
