import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonButton, IonLabel, IonCheckbox, IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.page.html',
  styleUrls: ['./datos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class DatosPage implements OnInit {
  signosAlarma = [
    { label: 'Dolor abdominal intenso y continuo', checked: false, name: 'dolorAbdominal' },
    { label: 'Dolor torácico o disnea', checked: false, name: 'dolorToracico' },
    { label: 'Derrame seroso al examen clínico y/o por estudio de derrame seroso al examen clínico y/o por estudio de', checked: false, name: 'derrameSeroso' },
    { label: 'Disminución brusca de la T° o hipotermia', checked: false, name: 'disminucionTemperatura' },
    { label: 'Disminución de la diuresis (disminución del volumen urinario)', checked: false, name: 'disminucionDiuresis' },
    { label: 'Hepatomegalia', checked: false, name: 'hepatomegalia' },
    { label: 'Ictericia', checked: false, name: 'ictericia' },
    { label: 'Estado mental alterado (somnolencia, inquietud, irritabilidad o convulsión)', checked: false, name: 'estadoMentalAlterado' },
    { label: 'Incremento del hematocrito', checked: false, name: 'incrementoHematocrito' }
  ];

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Signos de alarma seleccionados:', this.signosAlarma.filter(signo => signo.checked));
  }
}
