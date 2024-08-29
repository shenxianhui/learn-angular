import { createPlugin } from "plugin-manager";
import { TopRankComponent } from "./lib/top-rank.component";
import { TopRankModule } from "./lib/top-rank.module";

export default createPlugin({
  name: "top-rank",
  module: TopRankModule,
  component: TopRankComponent,
});
