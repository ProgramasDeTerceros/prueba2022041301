import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PipesModule } from './shared/pipes/pipes.module';
import { ComponentsModule } from "./modules/components/components.module";
import { ListaPartidosComponent } from './modules/lista-partidos/lista-partidos.component';
import { PartidoComponent } from './modules/partido/partido.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaPartidosComponent,
    PartidoComponent
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
