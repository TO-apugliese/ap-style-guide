import {NgModule}             from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule}         from '@angular/common';
import {AddressModule}        from '../address/address.module';
import {ImprintPageComponent} from './imprint.component';

const routes: Routes = [
  {path: '', component: ImprintPageComponent},
];

@NgModule({
  declarations: [ImprintPageComponent],
  exports:      [ImprintPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AddressModule,
  ],
})
export class ImprintPageModule {}

export * from './imprint.component';
