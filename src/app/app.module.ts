import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';


import { OddListComponent } from './oddList/odd-list/odd-list.component';
import { BasicHighlightDirective } from '../app/oddList/basic-highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './oddList/better-highlight/better-highlight.directive';
import { UnlessDirective } from './oddList/unless.directive';

import { AlertComponent } from './shared/alert/alert.component'
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core.module';

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
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule,
    CoreModule
  ],
  // No Longer Needed Angular 9 or greater
  entryComponents: [
    AlertComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
