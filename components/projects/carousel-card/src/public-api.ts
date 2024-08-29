import { createPlugin } from 'plugin-manager';
import { CarouselCardComponent } from './lib/carousel-card.component';
import { CarouselCardModule } from './lib/carousel-card.module';

export default createPlugin({
  name: 'carousel-card',
  module: CarouselCardModule,
  component: CarouselCardComponent
});