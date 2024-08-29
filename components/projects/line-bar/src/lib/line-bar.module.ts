import { NgModule } from '@angular/core';
import { DemoComponent } from './line-bar.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common'

@NgModule({
  declarations: [DemoComponent],
  entryComponents: [DemoComponent],
  imports: [CommonModule, NgZorroAntdModule],
  exports: [DemoComponent]
})

export class DemoModule { }