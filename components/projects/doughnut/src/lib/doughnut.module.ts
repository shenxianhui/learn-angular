import { NgModule } from '@angular/core';
import { DoughnutComponent } from './doughnut.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';

import { appEchartsFilterpieLegend } from './doughnut.directive';

@NgModule({
    imports: [NgZorroAntdModule, CommonModule],
    declarations: [DoughnutComponent, appEchartsFilterpieLegend],
    entryComponents: [DoughnutComponent],
    exports: [DoughnutComponent, appEchartsFilterpieLegend]
})
export class DoughnutModule { }
