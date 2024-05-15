import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonInput, IonLabel, IonCardContent, IonCardHeader, IonCard, IonCardTitle, IonButton, IonIcon, IonCol, IonRow, IonFab, IonFabButton, IonText, IonToast, IonFooter, IonLoading, IonAvatar, IonGrid } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
  standalone: true,
  imports: [IonGrid, IonAvatar, IonLoading, IonFooter, IonToast, IonText, IonFabButton, IonFab, IonRow, IonCol, IonIcon, IonButton, IonCardTitle, IonCard, IonCardHeader, IonCardContent, IonLabel, IonInput, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,RouterLink]
})
export class MainPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
