import { NgModule } from "@angular/core";
import { RuleExpressionComponent } from "./rule-expression.component";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [RuleExpressionComponent],
  entryComponents: [RuleExpressionComponent],
  imports: [CommonModule, NgZorroAntdModule, FormsModule],
  exports: [RuleExpressionComponent],
})
export class RuleExpressionModule {}
