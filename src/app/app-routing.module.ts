import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient } from './services/http/httpClient';

const routes: Routes = [
  {
    path: 'cartelera',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    canActivate: [],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'ignore' })],
  exports: [RouterModule],
  providers: [HttpClient],
})
export class AppRoutingModule {}
