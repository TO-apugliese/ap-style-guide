import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule}         from '@angular/common';
import {AddressComponent}     from './address.component';

const routes: Routes = [
  {path: '', component: AddressComponent},
];

@NgModule({
  declarations: [AddressComponent],
  exports:      [AddressComponent],
  imports:      [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class AddressModule {}

export * from './address.component';
