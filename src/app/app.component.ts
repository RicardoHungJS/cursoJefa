import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  datos: string;

  formularioContacto = new FormGroup({
    nombre: new FormControl(''),
    mail: new FormControl(''),
    mensaje: new FormControl('')
  });

  submit(){
    this.datos=`
    Nombre= ${this.formularioContacto.value.nombre}
    Mail= ${this.formularioContacto.value.mail}
    mensaje= ${this.formularioContacto.value.mensaje}
    `
  }
}