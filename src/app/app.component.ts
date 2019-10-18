import { Component } from '@angular/core';
import { SimpleType } from './types/simpleType';

@Component({
  //The name of the HTML-tag in index.html that hosts the angular app.
  selector: 'app-rootMH',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'meine app';
  sType: SimpleType = {
    id: 1,
    name: 'Erster Eintrag'
  };
}



