import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nombre = 'Ricardo Hung';
  saldo = 1000.05;
  dias = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
  articulos = [{
    codigo: 1,
    descripcion: "papas",
    precio: 12.33
  }, {
    codigo: 2,
    descripcion: "manzanas",
    precio: 54
  }];
  fechaActual = new Date();
}