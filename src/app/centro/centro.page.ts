import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel } from '@ionic/angular/standalone';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-centro',
  templateUrl: './centro.page.html',
  styleUrls: ['./centro.page.scss'],
  standalone: true,
  imports: [IonLabel, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],
  providers:[],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class CentroPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
