import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  articulos = null;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get("http://scratchya.com.ar/vue/datos.php")
      .subscribe(
        (result) => {
          this.articulos = result;
        },
        (error) => {
          console.log('error');
        }
      );
  }

}
