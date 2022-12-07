import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { MatInputModule } from '@angular/material/input';
const MATERIAL_MODULE = [
  MatInputModule
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,MatButtonModule, BrowserAnimationsModule,
    MATERIAL_MODULE
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
