import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {FormsModule ,ReactiveFormsModule} from "@angular/forms";
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatMenuModule} from "@angular/material/menu";
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { LoadingComponent } from './loading/loading.component';
import {MatGridListModule} from '@angular/material/grid-list'
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { LoadingRoutingModule } from './loading/loading-routing.module';
import { LoadingModule } from './loading/loading.module';


@NgModule({
  declarations: [
    AppComponent,
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatListModule,
    MatCardModule,
    MatButtonToggleModule,
    MatMenuModule,
    HttpClientModule,
    MatGridListModule,
    MatInputModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    LoadingModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})

export class AppModule { }
