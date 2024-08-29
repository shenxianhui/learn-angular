import { NgModule } from '@angular/core';
import { FanSunburstComponent } from './fan-sunburst.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common'

@NgModule({
  declarations: [FanSunburstComponent],
  entryComponents: [FanSunburstComponent],
  imports: [CommonModule, NgZorroAntdModule],
  exports: [FanSunburstComponent]
})

export class FanSunburstModule { }
