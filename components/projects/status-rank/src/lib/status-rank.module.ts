import { NgModule } from '@angular/core';
import { StatusRankComponent } from './status-rank.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common'

@NgModule({
  declarations: [StatusRankComponent],
  entryComponents: [StatusRankComponent],
  imports: [CommonModule, NgZorroAntdModule],
  exports: [StatusRankComponent]
})

export class StatusRankModule { }
