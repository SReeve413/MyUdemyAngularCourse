import { EventEmitter } from "@angular/core";

import { Recipe } from "./recipe.model";

export class RecipeService{
    
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is only a test', 'https://www.glutenfreeandmore.com/wp-content/uploads/2018/07/15latkes.jpg'),
        new Recipe('Another Test Recipe', 'This is only a test', 'https://www.glutenfreeandmore.com/wp-content/uploads/2018/07/15latkes.jpg')
      
      ];

      getRecipes() {
          return this.recipes.slice();
      }
}