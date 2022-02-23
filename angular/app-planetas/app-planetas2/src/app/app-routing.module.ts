import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetallePlanetaComponent } from './components/detalle-planeta/detalle-planeta.component';
import { ListaPlanetasComponent } from './components/lista-planetas/lista-planetas.component';

const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: 'home', component: ListaPlanetasComponent },
  {path: 'planeta/:id', component: DetallePlanetaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
