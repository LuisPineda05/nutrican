// import { ApplicationConfig } from '@angular/core';
// import { provideRouter } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {MatSelectModule} from "@angular/material/select";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {NgIf} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {MatRadioModule} from "@angular/material/radio";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatLineModule, MatNativeDateModule} from "@angular/material/core";
import {MatSliderModule} from "@angular/material/slider";
import {MatDialogModule} from "@angular/material/dialog";

import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {ProductListComponent} from "./sells/pages/product-list/product-list.component";
import {SidenavComponent} from "./shared/components/sidenav/sidenav.component";
import {PateComponent} from "./sells/pages/pate/pate.component";
import {DialogComponent} from "./shared/components/dialog/dialog.component";
import {CroquetasComponent} from "./sells/pages/croquetas/croquetas.component";
import {CarritoComponent} from "./sells/pages/carrito/carrito.component";
import {Dialog2Component} from "./shared/components/dialog2/dialog2.component";


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    SidenavComponent,
    PateComponent,
    DialogComponent,
    CroquetasComponent,
    CarritoComponent,
    Dialog2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    NgIf,
    MatSelectModule,
    HttpClientModule,
    MatRadioModule,
    MatSelectModule,
    MatListModule,
    MatSidenavModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule,
    MatDialogModule,
    MatSnackBarModule,
    MatLineModule,
    MatProgressBarModule,

  ],
  providers: [],
  exports: [
    SidenavComponent

  ],
  bootstrap: [AppComponent]
})

export class AppModule{
}
