import { createPlugin } from "plugin-manager";
import { LineBarComponent } from "./lib/line-bar.component";
import { LineBarModule } from "./lib/line-bar.module";

export default createPlugin({
  name: "line-bar",
  module: LineBarModule,
  component: LineBarComponent,
});
