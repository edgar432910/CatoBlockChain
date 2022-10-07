import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsuariosComponent } from './_pages/usuarios/usuarios.component';
import { VehiculosComponent } from './_pages/vehiculos/vehiculos.component';
import { CompraventaComponent } from './_pages/compraventa/compraventa.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './_pages/layout/layout.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormUsuariosComponent } from './_pages/usuarios/form-usuarios/form-usuarios.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    VehiculosComponent,
    CompraventaComponent,
    LayoutComponent,
    FormUsuariosComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
