import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonContent } from '@ionic/angular/standalone';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonContent, IonApp, IonRouterOutlet],
  providers:[],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  constructor() {}
}
