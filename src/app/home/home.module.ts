import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { homeRoutingModule } from './home-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {FormsModule} from "@angular/forms";
import {MatListModule} from "@angular/material/list";
import {MatCardModule} from "@angular/material/card";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatMenuModule} from "@angular/material/menu";
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    homeRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    FormsModule,
    MatListModule,
    MatCardModule,
    MatButtonToggleModule,
    MatMenuModule,
    HttpClientModule
  ],
  exports:[HomeComponent],

  providers: [HttpClient],
  bootstrap: [HomeComponent]
})

export class HomeModule { }
