import { Component } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes:Recipe[] = [
    new Recipe('Babi Kecap', 'Indonesian dish that uses pork belly and sweet soy sauce.', 'https://i0.wp.com/www.thegluttonlife.com/wp-content/uploads/2020/10/babi-kecap-soy-braised-pork-06.jpg?w=1024&ssl=1')
  ];
}
