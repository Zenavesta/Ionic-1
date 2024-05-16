import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonRow, IonItem, IonLabel, IonRadio, IonCol, IonButton, IonInput, IonRadioGroup } from '@ionic/angular/standalone';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.page.html',
  styleUrls: ['./paciente.page.scss'],
  standalone: true,
  imports: [IonRadioGroup, IonInput, IonButton, IonCol, IonRadio, IonLabel, IonItem, IonRow, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PacientePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
