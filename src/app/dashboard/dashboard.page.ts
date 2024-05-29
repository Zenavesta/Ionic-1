import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonIcon,
  IonItem, IonRouterOutlet, IonSplitPane, IonButtons, IonMenu, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonLabel,
    IonButtons, IonSplitPane, IonRouterOutlet, IonItem, IonIcon, IonList,
    IonContent, IonHeader, IonTitle, IonToolbar, IonMenu, // Añade IonMenu aquí
    CommonModule, FormsModule
  ],
  providers:[],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
