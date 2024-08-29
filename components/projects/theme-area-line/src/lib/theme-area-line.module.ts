import { NgModule } from '@angular/core';
import { ThemeAreaLineComponent } from './theme-area-line.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common'

@NgModule({
  declarations: [ThemeAreaLineComponent],
  entryComponents: [ThemeAreaLineComponent],
  imports: [CommonModule, NgZorroAntdModule],
  exports: [ThemeAreaLineComponent]
})
export class ThemeAreaLineModule { }
