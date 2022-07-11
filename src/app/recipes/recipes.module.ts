import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module'
import { RecipesRoutingModule } from './recipes-routing.module';

import { RecipesComponent } from './recipes.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './recipes-detail/recipes-detail.component';
import { RecipesItemComponent } from './recipes-list/recipes-item/recipes-item.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';

@NgModule({
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RecipesRoutingModule,
  ],
  declarations: [
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    RecipesItemComponent,
    RecipeStartComponent,
    RecipeEditComponent,
  ],
})
export class RecipesModule {}
