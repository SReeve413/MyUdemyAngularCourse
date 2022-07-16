import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';


import { OddListComponent } from './oddList/odd-list/odd-list.component';
import { BasicHighlightDirective } from '../app/oddList/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './oddList/better-highlight/better-highlight.directive';
import { UnlessDirective } from './oddList/unless.directive';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';

import { shoppingListReducer } from './shopping-list/store/shopping-list.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    OddListComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    UnlessDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({shoppingList: shoppingListReducer}),
    SharedModule,
    CoreModule
  ],
  // providers: [
  //   LoggingService
  // ],
  // No Longer Needed Angular 9 or greater
  // entryComponents: [
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
