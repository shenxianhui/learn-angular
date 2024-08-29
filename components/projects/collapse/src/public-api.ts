import { createPlugin } from 'plugin-manager';
import { CollapseComponent } from './lib/collapse.component';
import { CollapseModule } from './lib/collapse.module';

export default createPlugin({
  name: 'collapse',
  module: CollapseModule,
  component: CollapseComponent
});