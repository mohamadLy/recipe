import { Component } from '@angular/core';
import { Recipe } from '../model/recipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recipes: Recipe[];

  constructor() {
    this.recipes = [
      new Recipe('shushu', 'I love shushu', null, null, null),
      new Recipe('poutine', 'I love poutine', null, null, null),
      new Recipe('hamburger', 'I love hamburger', null, null, null),
      new Recipe('spaghetti', 'I love spaghetti', null, null, null),
      new Recipe('wonder bread', 'I love shushu', null, null, null)
    ];
  }
}
