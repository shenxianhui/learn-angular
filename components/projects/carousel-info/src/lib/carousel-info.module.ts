import { NgModule } from "@angular/core";
import { CarouselInfoComponent } from "./carousel-info.component";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [CarouselInfoComponent],
  entryComponents: [CarouselInfoComponent],
  imports: [CommonModule, NgZorroAntdModule],
  exports: [CarouselInfoComponent],
})
export class CarouselInfoModule {}
