import { createPlugin } from 'plugin-manager';
import { HighlightLabelComponent } from './lib/highlight-label.component';
import { HighlightLabelModule } from './lib/highlight-label.module';

export default createPlugin({
  name: 'highlight-label',
  module: HighlightLabelModule,
  component: HighlightLabelComponent
});