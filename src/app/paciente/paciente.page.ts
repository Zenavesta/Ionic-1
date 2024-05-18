import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonRow, IonItem, IonLabel, IonRadio, IonCol, IonButton, IonInput, IonRadioGroup, IonSelect, IonSelectOption, IonGrid } from '@ionic/angular/standalone';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.page.html',
  styleUrls: ['./paciente.page.scss'],
  standalone: true,
  imports: [IonGrid,
    IonRadioGroup, IonInput, IonButton, IonCol, IonRadio, IonLabel, IonItem, IonRow, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonSelect, IonSelectOption
  ]
})
export class PacientePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
