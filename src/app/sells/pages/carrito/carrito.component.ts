import {Component, OnInit} from '@angular/core';
import {AppModule} from "../../../app.module";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {DialogComponent} from "../../../shared/components/dialog/dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {Dialog2Component} from "../../../shared/components/dialog2/dialog2.component";

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent implements OnInit{
    precioPate: number = 10;
    precioCroque: number = 25;
    cantidadPate: number  = 0;
    cantdadCroque: number = 0;
    location: string = "";
    celu: string = "";
    constructor(private dialog: MatDialog,     private router: Router) {
    }
    order(): void {
        // Lógica para procesar la orden

        // Abre el cuadro de diálogo de confirmación
        const dialogRef = this.dialog.open(Dialog2Component, {
            width: '300px',
            data: { message: 'Se ha añadido a su carrito correctamente', icon: 'check' }
        });

        // Puedes suscribirte al evento afterClosed para realizar acciones después de cerrar el cuadro de diálogo
        dialogRef.afterClosed().subscribe(result => {
            console.log('Cuadro de diálogo cerrado', result);
        });
        // Puedes suscribirte al evento afterClosed para realizar acciones después de cerrar el cuadro de diálogo
        dialogRef.afterClosed().subscribe(result => {
            console.log('Cuadro de diálogo cerrado', result);
            // Redirige a /product-list después de procesar la orden
            this.router.navigate(['/product-list']);
        });
    }

    ngOnInit(): void {
        this.cantidadPate = parseInt(localStorage.getItem('pate')!);
        this.cantdadCroque = parseInt(localStorage.getItem('croqueta')!);

    }
}
