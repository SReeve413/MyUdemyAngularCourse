import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is only a test', 'https://www.glutenfreeandmore.com/wp-content/uploads/2018/07/15latkes.jpg'),
    new Recipe('Another Test Recipe', 'This is only a test', 'https://www.glutenfreeandmore.com/wp-content/uploads/2018/07/15latkes.jpg')
  
  ];


  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
