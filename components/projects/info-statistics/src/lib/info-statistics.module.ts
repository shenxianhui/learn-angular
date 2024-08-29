import { NgModule } from '@angular/core';
import { InfoStatisticsComponent } from './info-statistics.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common'

@NgModule({
  declarations: [InfoStatisticsComponent],
  entryComponents: [InfoStatisticsComponent],
  imports: [CommonModule, NgZorroAntdModule],
  exports: [InfoStatisticsComponent]
})

export class InfoStatisticsModule { }
