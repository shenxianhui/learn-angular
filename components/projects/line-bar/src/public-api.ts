import { createPlugin } from "plugin-manager";
import { DemoComponent } from "./lib/line-bar.component";
import { DemoModule } from "./lib/line-bar.module";

export default createPlugin({
  name: "line-bar",
  module: DemoModule,
  component: DemoComponent,
});
