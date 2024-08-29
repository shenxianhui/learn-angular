import { NgModule } from '@angular/core';
import { BaseFilterComponent } from './base-filter.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common'

@NgModule({
  declarations: [BaseFilterComponent],
  entryComponents: [BaseFilterComponent],
  imports: [CommonModule, NgZorroAntdModule],
  exports: [BaseFilterComponent]
})
export class BaseFilterModule { }
