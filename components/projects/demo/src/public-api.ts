import { createPlugin } from "plugin-manager";
import { DemoComponent } from "./lib/demo.component";
import { DemoModule } from "./lib/demo.module";

export default createPlugin({
  name: "demo",
  module: DemoModule,
  component: DemoComponent,
});
