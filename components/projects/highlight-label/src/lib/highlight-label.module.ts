import { NgModule } from '@angular/core';
import { HighlightLabelComponent } from './highlight-label.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common'

@NgModule({
  declarations: [HighlightLabelComponent],
  entryComponents: [HighlightLabelComponent],
  imports: [CommonModule, NgZorroAntdModule],
  exports: [HighlightLabelComponent]
})

export class HighlightLabelModule { }