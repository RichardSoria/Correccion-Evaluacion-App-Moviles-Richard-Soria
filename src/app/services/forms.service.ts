import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

export interface Form {
  name: string;
  lastName: string;
  cedula: string;
  birthDate: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  address: string;
  career: string;
}

@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor(private firestore: Firestore) { }

  createForm(name: string, lastName: string, cedula: string, birthDate: string, age: number, gender: string, email: string, phone: string, address: string, career: string) {
    const formsRef = collection(this.firestore, 'forms');
    const form: Form = {
      name,
      lastName,
      cedula,
      birthDate,
      age,
      gender,
      email,
      phone,
      address,
      career
    };
    return addDoc(formsRef, form)
  }
}
