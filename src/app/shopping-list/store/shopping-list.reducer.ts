import { Action } from '@ngrx/store'

import { Ingredient } from "../../shared/ingredients.model";
import { ADD_INGREDIENT } from './shopping-list.actions';

const initalState = {
  ingredients: [
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 10)
  ]
};

export function shppingListReducer (state = initalState, action: Action) {
  switch(action.type){
    case ADD_INGREDIENT:


      return{
        ...state,
        ingredients: [... state.ingredients, action.payload]
      }
      break;
    default:
  }
}
