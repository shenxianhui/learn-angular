import { createPlugin } from "plugin-manager";
import { DetailsProgressComponent } from "./lib/details-progress.component";
import { DetailsProgressModule } from "./lib/details-progress.module";

export default createPlugin({
  name: "details-progress",
  module: DetailsProgressModule,
  component: DetailsProgressComponent,
});
