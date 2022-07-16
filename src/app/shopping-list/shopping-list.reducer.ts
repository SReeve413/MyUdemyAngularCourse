import { Action } from '@ngrx/store'

import { Ingredient } from "../shared/ingredients.model";

const initalState = {
  ingredients: [
    new Ingredient('Apple', 5),
    new Ingredient('Tomato', 10)
  ]
};

export function shppingListReducer (state = initalState, action: Action) {
  switch(action.type){
    case 'ADD_INGREDIENT':


      return{
        ...state,
        ingredients: [... state.ingredients, action]
      }
      break;
    default:
  }
}
