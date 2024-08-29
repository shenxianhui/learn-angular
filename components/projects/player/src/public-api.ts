import { createPlugin } from 'plugin-manager';
import { PlayerComponent } from './lib/player.component';
import { PlayerModule } from './lib/player.module';

export default createPlugin({
  name: 'player',
  module: PlayerModule,
  component: PlayerComponent
});