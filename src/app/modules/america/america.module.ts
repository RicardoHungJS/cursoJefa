import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmericaRoutingModule } from './america-routing.module';
import { ChileComponent } from './chile/chile.component';
import { ArgentinaComponent } from './argentina/argentina.component';
import { ColombiaComponent } from './colombia/colombia.component';


@NgModule({
  declarations: [ChileComponent, ArgentinaComponent, ColombiaComponent],
  imports: [
    CommonModule,
    AmericaRoutingModule
  ]
})
export class AmericaModule { }
