import { createPlugin } from 'plugin-manager';
import { ThemeListComponent } from './lib/theme-list.component';
import { ThemeListModule } from './lib/theme-list.module';

export default createPlugin({
  name: 'theme-list',
  module: ThemeListModule,
  component: ThemeListComponent
});