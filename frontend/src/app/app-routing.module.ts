import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListaPartidosComponent } from "./modules/lista-partidos/lista-partidos.component";
import { SeePartidoComponent } from "./modules/see-partido/see-partido.component";
const routes: Routes = [
  { path: "partido", component: ListaPartidosComponent },
  { path: "partido/:id", component: SeePartidoComponent },
  { path: "**", pathMatch: "full", redirectTo: "partido" },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
