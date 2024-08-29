import { createPlugin } from 'plugin-manager';
import { FanSunburstComponent } from './lib/fan-sunburst.component';
import { FanSunburstModule } from './lib/fan-sunburst.module';

export default createPlugin({
  name: 'fan-sunburst',
  module: FanSunburstModule,
  component: FanSunburstComponent
});