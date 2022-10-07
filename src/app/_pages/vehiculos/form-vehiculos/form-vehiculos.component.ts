import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-vehiculos',
  templateUrl: './form-vehiculos.component.html',
  styleUrls: ['./form-vehiculos.component.css'],
})
export class FormVehiculosComponent implements OnInit {
  formGroup!: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.loadForm();
  }

  loadForm() {
    this.formGroup = new FormGroup({
      marca: new FormControl(null, [Validators.required]),
      modelo: new FormControl(null, [Validators.required]),
      tipo: new FormControl(null, [Validators.required]),
      color: new FormControl(null, [Validators.required]),
      vin: new FormControl(null, [Validators.required]),
      walletprop: new FormControl(null, [Validators.required]),
    });
  }

  enviar() {
    console.log('eb');
  }
}
