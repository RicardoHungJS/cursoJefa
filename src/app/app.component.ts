import { Component, OnInit } from '@angular/core';
import { ArticulosService } from './services/articulos.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  articulos = null;

  constructor(private articulosServicio : ArticulosService){}

  ngOnInit(){
    this.articulos = this.articulosServicio.retornar();
  }
}