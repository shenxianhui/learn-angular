import { NgModule } from '@angular/core';
import { PlayerComponent } from './player.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common'

@NgModule({
  declarations: [PlayerComponent],
  entryComponents: [PlayerComponent],
  imports: [CommonModule, NgZorroAntdModule],
  exports: [PlayerComponent]
})
export class PlayerModule { }
