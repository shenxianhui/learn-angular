import { createPlugin } from "plugin-manager";
import { RuleExpressionComponent } from "./lib/rule-expression.component";
import { RuleExpressionModule } from "./lib/rule-expression.module";

export default createPlugin({
  name: "rule-expression",
  module: RuleExpressionModule,
  component: RuleExpressionComponent,
});
