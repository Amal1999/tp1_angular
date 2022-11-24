import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ex1Component } from './ex1/ex1.component';
import { Ex2Component } from './ex2/ex2.component';
import { Ex3Component } from './ex3/ex3.component';
import { FilsComponent } from './ex3/fils/fils.component';
import { Ex4Component } from './ex4/ex4.component';
import { CvDetailsComponent } from './ex4/cv-details/cv-details.component';
import { CvItemComponent } from './ex4/cv-item/cv-item.component';
import { ListComponentComponent } from './ex4/list-component/list-component.component';

@NgModule({
  declarations: [
    AppComponent,
    Ex1Component,
    Ex2Component,
    Ex3Component,
    FilsComponent,
    Ex4Component,
    CvDetailsComponent,
    CvItemComponent,
    ListComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
