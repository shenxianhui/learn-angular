import { NgModule } from '@angular/core';
import { CarouselCardComponent } from './carousel-card.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common'

@NgModule({
  declarations: [CarouselCardComponent],
  entryComponents: [CarouselCardComponent],
  imports: [CommonModule, NgZorroAntdModule],
  exports: [CarouselCardComponent]
})
export class CarouselCardModule { }
