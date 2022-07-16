import { Action } from '@ngrx/store'

import { Ingredient } from 'src/app/shared/ingredients.model';

export const ADD_INGREDIENT = 'ADD_INGREDINET';

export class AddIngredient implements Action {
  readonly type = ADD_INGREDIENT;
  payload: Ingredient;

}
