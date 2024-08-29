import { NgModule } from "@angular/core";
import { TopRankComponent } from "./top-rank.component";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [TopRankComponent],
  entryComponents: [TopRankComponent],
  imports: [CommonModule, NgZorroAntdModule],
  exports: [TopRankComponent],
})
export class TopRankModule {}
