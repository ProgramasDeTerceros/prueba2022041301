import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { LoadingComponent } from "./loading/loading.component";
import { ButtonComponent } from "./button/button.component";
import { ButtonSeeComponent } from "./button-see/button-see.component";
import { AppRoutingModule } from "src/app/app-routing.module";
import { PipesModule } from "src/app/shared/pipes/pipes.module";
import { TablePartidosComponent } from "./table-partidos/table-partidos.component";
import { PartidoComponent } from "./partido/partido.component";

const declarations = [
  HeaderComponent,
  FooterComponent,
  NavbarComponent,
  LoadingComponent,
  ButtonComponent,
  ButtonSeeComponent,
  TablePartidosComponent,
  PartidoComponent,
];
@NgModule({
  declarations: [...declarations],
  imports: [CommonModule, AppRoutingModule, PipesModule],
  exports: [...declarations],
})
export class ComponentsModule {}
