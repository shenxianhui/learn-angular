import { createPlugin } from "plugin-manager";
import { ComprehensiveListComponent } from "./lib/comprehensive-list.component";
import { ComprehensiveListModule } from "./lib/comprehensive-list.module";

export default createPlugin({
  name: "comprehensive-list",
  module: ComprehensiveListModule,
  component: ComprehensiveListComponent,
});
