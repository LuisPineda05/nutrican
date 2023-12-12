import {Component, OnInit} from '@angular/core';
import {AppModule} from "../../../app.module";
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../../../shared/components/dialog/dialog.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pate',
  templateUrl: './pate.component.html',
  styleUrl: './pate.component.css'
})
export class PateComponent implements OnInit{

  constructor(private dialog: MatDialog,     private router: Router
  ) {}

  benefits: PateBenefit[] = [
    {
      title: 'Pelaje Brillante y Sedoso',
      description: 'Fórmula Enriquecida con Ácidos Grasos Omega-3 y Omega-6: NutriCan prioriza la salud del pelaje con una fórmula especial que incluye ácidos grasos esenciales. Estos nutrientes promueven un pelaje sedoso, brillante y de apariencia saludable. ¡Tu perro lucirá radiante!'
    },
    {
      title: 'Digestión Óptima y Heces Sólidas',
      description: 'Ingredientes de Alta Calidad y Fácil Digestión: La comida húmeda NutriCan está cuidadosamente elaborada con ingredientes de alta calidad, altamente digestibles. Esta combinación exclusiva garantiza una digestión completa y heces sólidas, facilitando el proceso digestivo de tu perro y contribuyendo a su bienestar general.'
    },
    {
      title: 'Bajo en Grasas, Alto en Nutrientes Esenciales',
      description: 'Fórmula Balanceada para el Control de Peso: NutriCan se compromete a proporcionar una opción baja en grasas que, al mismo tiempo, ofrece todos los nutrientes esenciales que tu perro necesita. Nuestra fórmula equilibrada contribuye al control del peso, manteniendo a tu perro en su mejor forma física y promoviendo una vida activa y saludable.'
    }
  ];
  showBenefits: boolean = false;
  quantity: number = 1;
  cost: number = 10;
  toggleBenefits() {
    this.showBenefits = !this.showBenefits;
  }
  updateCost() {
    this.cost = this.quantity * 10;
  }
  goBack() {
    window.history.back();
  }

  ngOnInit(): void {
  }
  order(): void {
    // Lógica para procesar la orden
    localStorage.setItem('pate', JSON.stringify(this.quantity));

    // Abre el cuadro de diálogo de confirmación
    const dialogRef = this.dialog.open(DialogComponent, {
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
      this.router.navigate(['/carrito']);
    });
  }


}

export interface PateBenefit {
  title: string;
  description: string;
}


