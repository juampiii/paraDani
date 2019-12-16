import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent{
  title = 'Animal Shop';
  products = [
    {
      "name": "Pienso de perros",
      "description": "Pienso vegano para perros pequeños",
      "price":15
    },
    {
      "name": "Collar para perros",
      "description": "Collar antiparasitario",
      "price":8
    },
    {
      "name": "Cepillo para gatos",
      "description": "Cepillo suave y eficaz",
      "price": 20
    },
    {
      "name": "Antiestamínico para gatos",
      "description": "Anula los efectos de la alergia en otros gatos",
      "price": 30
    }]
}
