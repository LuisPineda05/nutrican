import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./security/pages/login/login.component";
import {ProductListComponent} from "./sells/pages/product-list/product-list.component";
import {PateComponent} from "./sells/pages/pate/pate.component";
import {CroquetasComponent} from "./sells/pages/croquetas/croquetas.component";
import {CarritoComponent} from "./sells/pages/carrito/carrito.component";

export const routes: Routes = [

  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login' , component: LoginComponent},
  {path: 'product-list', component: ProductListComponent},
  {path: 'pate', component: PateComponent},
  {path: 'croqueta', component: CroquetasComponent},
  {path: 'carrito', component: CarritoComponent},
  {path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
