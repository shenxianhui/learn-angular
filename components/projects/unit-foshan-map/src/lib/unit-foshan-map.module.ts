import { NgModule } from '@angular/core';
import { UnitFoShanMapComponent } from './unit-foshan-map.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common'

@NgModule({
  declarations: [UnitFoShanMapComponent],
  entryComponents: [UnitFoShanMapComponent],
  imports: [CommonModule, NgZorroAntdModule],
  exports: [UnitFoShanMapComponent]
})
export class UnitFoShanMapModule { }
