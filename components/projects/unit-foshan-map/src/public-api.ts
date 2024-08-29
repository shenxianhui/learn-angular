import { createPlugin } from 'plugin-manager';
import { UnitFoShanMapComponent } from './lib/unit-foshan-map.component';
import { UnitFoShanMapModule } from './lib/unit-foshan-map.module';

export default createPlugin({
  name: 'map',
  module: UnitFoShanMapModule,
  component: UnitFoShanMapComponent
});
