import { createPlugin } from 'plugin-manager';
import { DoughnutComponent } from './lib/doughnut.component';
import { DoughnutModule } from './lib/doughnut.module';

export default createPlugin({
    name: 'doughnut',
    component: DoughnutComponent,
    module: DoughnutModule,

});
