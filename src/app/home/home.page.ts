import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonItem, IonList, IonLabel, IonDatetime, IonSelect, IonSelectOption, IonButton  } from '@ionic/angular/standalone';
import { FormsService } from '../services/forms.service';
import { NgFor, CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [CommonModule, FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonInput, IonItem, IonLabel, IonDatetime, IonSelect, IonSelectOption, IonButton ],
})
export class HomePage {
  newName: string = '';
  newLastName: string = '';
  newCedula: string = '';
  newBirthDate: string = '';
  newAge: number = 0;
  newGender: string = '';
  newEmail: string = '';
  newPhone: string = '';
  newAddress: string = '';
  newCareer: string = '';

  constructor(private formsService: FormsService) {}

  createForm() {
    this.formsService.createForm(this.newName, this.newLastName, this.newCedula, this.newBirthDate, this.newAge, this.newGender, this.newEmail, this.newPhone, this.newAddress, this.newCareer)
      .then(() => {
        alert('Formulario creado con éxito');
        this.resetForm();
      })
      .catch((error) => {
        alert('Error al crear el formulario: ' + error);
      });
  }

  resetForm() {
    this.newName = '';
    this.newLastName = '';
    this.newCedula = '';
    this.newBirthDate = '';
    this.newAge = 0;
    this.newGender = '';
    this.newEmail = '';
    this.newPhone = '';
    this.newAddress = '';
    this.newCareer = '';
  }
}
