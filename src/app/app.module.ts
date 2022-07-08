import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS }from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesListComponent } from './recipes/recipes-list/recipes-list.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipesItemComponent } from './recipes/recipes-list/recipes-item/recipes-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ShoppingListService } from './shopping-list/shopping-list.service';

import { OddListComponent } from './oddList/odd-list/odd-list.component';
import { BasicHighlightDirective } from '../app/oddList/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './oddList/better-highlight/better-highlight.directive';
import { UnlessDirective } from './oddList/unless.directive';
import { DropdownDirective } from './shared/dropdown.directive';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeService } from './recipes/recipe.service';
import { AuthComponent } from './auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    RecipesItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,

    OddListComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent,

    AuthComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    AppRoutingModule
  ],
  providers: [
    ShoppingListService,
    RecipeService,
    {provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
