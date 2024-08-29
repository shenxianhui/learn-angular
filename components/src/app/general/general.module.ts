import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';

const APP_COMPONENTS = [
    LayoutComponent
];

@NgModule({
    declarations: [
        APP_COMPONENTS
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        APP_COMPONENTS
    ]
})
export class GeneralModule { }
