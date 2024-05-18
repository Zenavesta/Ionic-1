import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonRow, IonItem, IonLabel,
  IonRadio, IonCol, IonButton, IonInput, IonRadioGroup, IonSelect,
  IonSelectOption, IonGrid
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.page.html',
  styleUrls: ['./paciente.page.scss'],
  standalone: true,
  imports: [
    IonGrid, IonRadioGroup, IonInput, IonButton, IonCol, IonRadio,
    IonLabel, IonItem, IonRow, IonContent, IonHeader, IonTitle,
    IonToolbar, CommonModule, FormsModule, IonSelect, IonSelectOption
  ]
})
export class PacientePage implements OnInit {
  nombres: string = '';
  apellidoPaterno: string = '';
  apellidoMaterno: string = '';
  sexo: string = '';
  dniPasaporte: string = '';
  edad: number = 0;
  ocupacion: string = '';
  gestante: string = '';
  semanas: number = 0;

  constructor() { }

  ngOnInit() {
  }

  onSexoChange(event: any) {
    // Resetea la opción de gestante y semanas si se cambia el sexo
    if (this.sexo !== 'Femenino') {
      this.gestante = '';
      this.semanas = 0;
    }
  }

  onGestanteChange(event: any) {
    // Resetea el campo de semanas si se selecciona "No" en gestante
    if (this.gestante !== 'Sí') {
      this.semanas = 0;
    }
  }

  onSubmit() {
    // Lógica para manejar el envío del formulario
    console.log('Formulario enviado', {
      nombres: this.nombres,
      apellidoPaterno: this.apellidoPaterno,
      apellidoMaterno: this.apellidoMaterno,
      sexo: this.sexo,
      dniPasaporte: this.dniPasaporte,
      edad: this.edad,
      ocupacion: this.ocupacion,
      gestante: this.gestante,
      semanas: this.semanas
    });
  }
}
