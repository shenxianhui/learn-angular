import { createPlugin } from 'plugin-manager';
import { InfoStatisticsComponent } from './lib/info-statistics.component';
import { InfoStatisticsModule } from './lib/info-statistics.module';

export default createPlugin({
  name: 'info-statistics',
  module: InfoStatisticsModule,
  component: InfoStatisticsComponent
});