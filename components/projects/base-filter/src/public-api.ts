import { createPlugin } from 'plugin-manager';
import { BaseFilterComponent } from './lib/base-filter.component';
import { BaseFilterModule } from './lib/base-filter.module';

export default createPlugin({
  name: 'base-filter',
  module: BaseFilterModule,
  component: BaseFilterComponent
});
