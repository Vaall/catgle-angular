import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TurnosComponent } from './turnos/turnos.component';
import { SearcherComponent } from './searcher/searcher.component';

const routes: Routes = [
  { path: '', component: SearcherComponent, pathMatch: 'full' },
  { path: 'pacientes/turnos-por-email', component: TurnosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
