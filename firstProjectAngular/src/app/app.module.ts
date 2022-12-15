import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { PersonalProfileComponent } from './personal-profile/personal-profile.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

const MATERIAL_MODULE = [
  MatSlideToggleModule,
  MatButtonModule,
   MatCardModule,
   MatToolbarModule,
   MatIconModule,
   MatTableModule,
   MatInputModule,
   MatTabsModule,
   FormsModule, 
   ReactiveFormsModule,
   MatOptionModule,
   MatSelectModule
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PersonalProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MATERIAL_MODULE
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
