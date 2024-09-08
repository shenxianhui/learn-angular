import { createPlugin } from "plugin-manager";
import { CarouselInfoComponent } from "./lib/carousel-info.component";
import { CarouselInfoModule } from "./lib/carousel-info.module";

export default createPlugin({
  name: "carousel-info",
  module: CarouselInfoModule,
  component: CarouselInfoComponent,
});
