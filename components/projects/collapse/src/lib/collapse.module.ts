import { NgModule } from '@angular/core';
import { CollapseComponent } from './collapse.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common'

@NgModule({
  declarations: [CollapseComponent],
  entryComponents: [CollapseComponent],
  imports: [CommonModule, NgZorroAntdModule],
  exports: [CollapseComponent]
})
export class CollapseModule { }
