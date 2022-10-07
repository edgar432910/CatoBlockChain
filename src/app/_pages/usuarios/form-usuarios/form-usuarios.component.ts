import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-usuarios',
  templateUrl: './form-usuarios.component.html',
  styleUrls: ['./form-usuarios.component.css'],
})
export class FormUsuariosComponent implements OnInit {
  formGroup!: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.loadForm();
  }

  loadForm() {
    this.formGroup = new FormGroup({
      nombre: new FormControl(null, [Validators.required]),
      apellido: new FormControl(null, [Validators.required]),
      direccion: new FormControl(null, [Validators.required]),
      provincia: new FormControl(null, [Validators.required]),
      distrito: new FormControl(null, [Validators.required]),
      wallet: new FormControl(null, [Validators.required]),
    });
  }

  enviar() {
    console.log('eb');
  }
}
