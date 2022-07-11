import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS }from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { ShoppingListService } from './shopping-list/shopping-list.service';

import { OddListComponent } from './oddList/odd-list/odd-list.component';
import { BasicHighlightDirective } from '../app/oddList/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './oddList/better-highlight/better-highlight.directive';
import { UnlessDirective } from './oddList/unless.directive';

import { RecipeService } from './recipes/recipe.service';
import { AuthComponent } from './auth/auth.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { AlertComponent } from './shared/alert/alert.component'
import { RecipesModule } from './recipes/recipes.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    OddListComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,

    AuthComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    AppRoutingModule,
    RecipesModule,
    ShoppingListModule,
    SharedModule
  ],
  providers: [
    ShoppingListService,
    RecipeService,
    {provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true}
  ],
  // No Longer Needed Angular 9 or greater
  entryComponents: [
    AlertComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
