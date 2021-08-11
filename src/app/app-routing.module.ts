import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PruebaComponent } from './components/prueba/prueba.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/prueba',
    pathMatch: 'full'
  },
  {
    path: 'prueba',
    component: PruebaComponent
  },
  {
    path: '**',
    redirectTo: '/prueba'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
