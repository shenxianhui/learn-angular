import { createPlugin } from "plugin-manager";
import { StatusRankComponent } from "./lib/status-rank.component";
import { StatusRankModule } from "./lib/status-rank.module";

export default createPlugin({
  name: "status-rank",
  module: StatusRankModule,
  component: StatusRankComponent,
});
