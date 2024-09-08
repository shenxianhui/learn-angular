import { NgModule } from "@angular/core";
import { DetailsProgressComponent } from "./details-progress.component";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [DetailsProgressComponent],
  entryComponents: [DetailsProgressComponent],
  imports: [CommonModule, NgZorroAntdModule],
  exports: [DetailsProgressComponent],
})
export class DetailsProgressModule {}
