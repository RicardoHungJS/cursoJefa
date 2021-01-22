import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { JuegodadosComponent } from './components/juegodados/juegodados.component';
import { AcercadeComponent } from './components/acercade/acercade.component';

const routes: Routes = [
  {path: 'juegodados', component: JuegodadosComponent},
  {path: 'acercade', component: AcercadeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
