import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

/*Permet d utiliser NgModel dans mat-checkbox?*/
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



import { AppComponent } from './app.component';
import {MaterialModule} from './material.module';

import { MatTestCheckboxComponent } from './mat-test-checkbox/mat-test-checkbox.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { MainToolbarComponent } from './main-toolbar/main-toolbar.component';
import { NewsCardComponent } from './news-card/news-card.component';
import { AppRoutingModule } from './app-routing.module';
import { NewsSileneComponent } from './news-silene/news-silene.component';
import { AnnuaireSileneComponent } from './annuaire-silene/annuaire-silene.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    MatTestCheckboxComponent,
    MainMenuComponent,
    MainToolbarComponent,
    NewsCardComponent,
    NewsSileneComponent,
    AnnuaireSileneComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
