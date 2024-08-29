import { NgModule } from '@angular/core';
import { ThemeListComponent } from './theme-list.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common'

@NgModule({
  declarations: [ThemeListComponent],
  entryComponents: [ThemeListComponent],
  imports: [CommonModule, NgZorroAntdModule],
  exports: [ThemeListComponent]
})
export class ThemeListModule { }
