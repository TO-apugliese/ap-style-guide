import {NgModule}                   from '@angular/core';
import {RouterModule, Routes}       from '@angular/router';
import {CommonModule}               from '@angular/common';
import {PrivacyPolicyPageComponent} from './privacy-policy.component';
import {AddressModule}              from '../address/address.module';

const routes: Routes = [
    {path: '', component: PrivacyPolicyPageComponent},
];

@NgModule({
    declarations: [PrivacyPolicyPageComponent],
    exports:      [PrivacyPolicyPageComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        AddressModule,
    ],
})
export class PrivacyPolicyPageModule {}

export * from './privacy-policy.component';