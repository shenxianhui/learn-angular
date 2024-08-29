import { createPlugin } from "plugin-manager";
import { HighlightProgressComponent } from "./lib/highlight-progress.component";
import { HighlightProgressModule } from "./lib/highlight-progress.module";

export default createPlugin({
  name: "highlight-progress",
  module: HighlightProgressModule,
  component: HighlightProgressComponent,
});
