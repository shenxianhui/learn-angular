import { createPlugin } from 'plugin-manager';
import { ThemeAreaLineComponent } from './lib/theme-area-line.component';
import { ThemeAreaLineModule } from './lib/theme-area-line.module';

export default createPlugin({
  name: 'theme-area-line',
  module: ThemeAreaLineModule,
  component: ThemeAreaLineComponent
});