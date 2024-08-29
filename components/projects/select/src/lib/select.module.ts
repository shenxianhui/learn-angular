import { NgModule } from "@angular/core";
import { SelectComponent } from "./select.component";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [SelectComponent],
  entryComponents: [SelectComponent],
  imports: [CommonModule, NgZorroAntdModule, FormsModule],
  exports: [SelectComponent],
})
export class SelectModule {}
