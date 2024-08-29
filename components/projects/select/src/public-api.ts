import { createPlugin } from "plugin-manager";
import { SelectComponent } from "./lib/select.component";
import { SelectModule } from "./lib/select.module";

export default createPlugin({
  name: "select",
  module: SelectModule,
  component: SelectComponent,
});
