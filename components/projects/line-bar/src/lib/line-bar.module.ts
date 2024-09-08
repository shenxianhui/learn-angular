import { NgModule } from '@angular/core';
import { LineBarComponent } from './line-bar.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common'

@NgModule({
  declarations: [LineBarComponent],
  entryComponents: [LineBarComponent],
  imports: [CommonModule, NgZorroAntdModule],
  exports: [LineBarComponent]
})

export class LineBarModule { }
