import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {DialogComponent} from "../../../shared/components/dialog/dialog.component";

@Component({
  selector: 'app-croquetas',
  templateUrl: './croquetas.component.html',
  styleUrl: './croquetas.component.css'
})
export class CroquetasComponent implements OnInit{

  constructor(private dialog: MatDialog,     private router: Router
  ) {}

  benefits: PateBenefit[] = [
    {
      title: 'Ingredientes Naturales y Artesanales',
      description: 'Disfruta de la tranquilidad al saber que estas galletas son creadas con ingredientes naturales y producidas artesanalmente. Sin preservantes ni colorantes, NutriCan se compromete a brindar a tu perro una experiencia de sabor auténtica y saludable.'
    },
    {
      title: 'Óptima Composición Nutricional',
      description: 'Con un análisis garantizado que incluye un mínimo del 10% de proteína y un mínimo del 5% de grasa, estas galletas aportan los nutrientes esenciales para mantener a tu perro lleno de energía y vitalidad. Además, con un máximo del 15% de humedad, garantizamos frescura y calidad en cada bocado.'
    },
    {
      title: 'Fórmula Enriquecida con Vitaminas y Minerales',
      description: 'NutriCan va más allá al incorporar una fórmula enriquecida con vitaminas A, D, y E, así como minerales esenciales como Selenio y Zinc orgánico. Estos elementos contribuyen al bienestar general de tu mascota, fortaleciendo su sistema inmunológico y promoviendo un pelaje saludable.'
    },
    {
      title: 'Delicioso Sabor a Hígado y Avena',
      description: 'La combinación irresistible de hígado y avena no solo satisface los paladares más exigentes de los perros, sino que también ofrece un toque gourmet en cada galleta. ¡NutriCan convierte la hora de los premios en un momento de deleite para tu fiel amigo!'
    }
  ];

  showBenefits: boolean = false;

  quantity: number = 1;
  cost: number = 25;

  toggleBenefits() {
    this.showBenefits = !this.showBenefits;
  }

  updateCost() {
    this.cost = this.quantity * 25;
  }
  goBack() {
    window.history.back();
  }

  ngOnInit(): void {
  }
  order(): void {
    // Lógica para procesar la orden

    localStorage.setItem('croqueta', JSON.stringify(this.quantity));

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

