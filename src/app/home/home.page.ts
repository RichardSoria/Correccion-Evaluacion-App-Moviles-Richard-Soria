import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonItem, IonList, IonLabel, IonDatetime, IonSelect, IonSelectOption  } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonItem, IonList, IonLabel, IonDatetime, IonSelect, IonSelectOption ],
})
export class HomePage {
  constructor() {}
}
