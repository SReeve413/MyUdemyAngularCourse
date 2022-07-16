import { Ingredient } from '../../shared/ingredients.model';
import * as ShoppingListActions from './shopping-list.actions';

const initalState = {
  ingredients: [new Ingredient('Apple', 5), new Ingredient('Tomato', 10)],
};

export function shoppingListReducer(
  state = initalState,
  action: ShoppingListActions.AddIngredient
) {
  switch (action.type) {
    case ShoppingListActions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
      };
    default:
      return state;
  }
}
