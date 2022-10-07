import { Routes, RouterModule } from '@angular/router';
import { VehiculosComponent } from './_pages/vehiculos/vehiculos.component';
import { CompraventaComponent } from './_pages/compraventa/compraventa.component';
import { UsuariosComponent } from './_pages/usuarios/usuarios.component';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './_pages/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
  },
  {
    path: 'vehiculo',
    component: VehiculosComponent,
  },
  {
    path: 'compraventa',
    component: CompraventaComponent,
  },
  {
    path: 'usuario',
    component: UsuariosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
