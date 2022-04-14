import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PipesModule } from './shared/pipes/pipes.module';
import { ComponentsModule } from "./modules/components/components.module";
import { ListaPartidosComponent } from './modules/lista-partidos/lista-partidos.component';
import { SeePartidoComponent } from './modules/see-partido/see-partido.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPartidosComponent,
    SeePartidoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ComponentsModule,
    PipesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
