import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListaPartidosComponent } from "./modules/lista-partidos/lista-partidos.component";
import { PartidoComponent } from "./modules/partido/partido.component";
const routes: Routes = [
  { path:"partidos",component:ListaPartidosComponent},
  { path:"partido/:id",component:PartidoComponent},
  { path: "**", pathMatch: "full", redirectTo: "partidos" },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
