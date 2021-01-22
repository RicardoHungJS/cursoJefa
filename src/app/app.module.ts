import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { JuegodadosComponent } from './components/juegodados/juegodados.component';
import { AcercadeComponent } from './components/acercade/acercade.component';
import { DadoComponent } from './components/dado/dado.component';

@NgModule({
  declarations: [
    AppComponent,
    JuegodadosComponent,
    DadoComponent,
    AcercadeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
