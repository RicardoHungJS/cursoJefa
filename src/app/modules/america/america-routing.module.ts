import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChileComponent } from './chile/chile.component';
import { ArgentinaComponent } from './argentina/argentina.component';
import { ColombiaComponent } from './colombia/colombia.component';

const routes: Routes = [
  {
    path: 'chile',
    component: ChileComponent
  },
  {
    path: 'argentina',
    component: ArgentinaComponent
  },
  {
    path: 'colombia',
    component: ColombiaComponent
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmericaRoutingModule { }
