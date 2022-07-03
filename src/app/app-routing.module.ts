import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { RecipesComponent } from "./recipes/recipes.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipesDetailComponent } from "./recipes/recipes-detail/recipes-detail.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";

import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipesResolverService } from "./recipes/recipes-resolver.service";

const appRoutes: Routes = [
    { path: '',  pathMatch: 'full', redirectTo: '/recipes'},
    { path: 'recipes', component: RecipesComponent, children: [
        {path: '', pathMatch: 'full', component: RecipeStartComponent },
        {path: 'new',  component: RecipeEditComponent},
        {path: ':id',  component: RecipesDetailComponent, resolve: [RecipesResolverService]},
        {path: ':id/edit',  component: RecipeEditComponent, resolve: [RecipesResolverService]},
    ]},
    { path: 'shopping-list', component: ShoppingListComponent },

]

@NgModule({
imports: [RouterModule.forRoot(appRoutes)],
exports: [RouterModule]
})
export class AppRoutingModule {

}
