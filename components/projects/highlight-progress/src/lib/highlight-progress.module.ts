import { NgModule } from '@angular/core';
import { HighlightProgressComponent } from './highlight-progress.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common'

@NgModule({
  declarations: [HighlightProgressComponent],
  entryComponents: [HighlightProgressComponent],
  imports: [CommonModule, NgZorroAntdModule],
  exports: [HighlightProgressComponent]
})

export class HighlightProgressModule { }