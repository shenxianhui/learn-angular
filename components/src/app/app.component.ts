import {
  Component,
  OnInit,
  ElementRef,
  Compiler,
  Injector,
  NgModuleFactory,
  Type,
} from "@angular/core";
import {
  PluginManagerService,
  componentData,
  PluginData,
} from "plugin-manager";
// import { init } from '../../projects/topology-log/src/lib/core/middles/default';
const $ = (window as any).$;

interface PluginItem {
  moduleFactory: NgModuleFactory<any>;
  component: Type<any>;
  injector: Injector;
  name: string;
  data: any;
  loading: boolean;
}
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.styl"],
})
export class AppComponent implements OnInit {
  name: any;
  plugins: PluginItem[] = [];
  moduleData: any = [];

  constructor(
    private el: ElementRef,
    private pluginManagerService: PluginManagerService,
    private compiler: Compiler,
    private injector: Injector
  ) {
    this.pluginManagerService.filterVa$.subscribe((state) => {
      this.name = state;
    });
  }

  loadModule(data): void {
    for (const i in data) {
      if (data.hasOwnProperty(i)) {
        // 模拟数据
        this.pluginManagerService.loadModule(data[i].name).then((plugin) => {
          const moduleFactory = this.compiler.compileModuleSync(plugin.module);
          this.plugins = [
            ...this.plugins,
            {
              moduleFactory,
              name: plugin.name,
              component: plugin.component,
              injector: Injector.create(
                [
                  {
                    provide: componentData,
                    useValue: new PluginData({
                      data: data[i].json_data.data_json.data,
                      color: data[i].json_data.color_json,
                      link: data[i].json_data.link_json,
                      params: data[i].json_data.params_json,
                      title:
                        data[i].json_data.title_name !== undefined
                          ? data[i].json_data.title_name
                          : null,
                    }),
                  },
                ],
                this.injector
              ), // 依赖注入
              data: data[i], // 组件数据传递(展示)
              loading: false, // loading状态
            },
          ];
        });
      }
    }
  }

  ngOnInit() {
    // init();
    // 修改模拟数据
    this.moduleData = [
      {
        id: 0,
        name: "line-bar",
        module_type: "others",
        width: 90,
        height: 80,
        json_data: {
          data_json: {
            data: {
              xAxis: {
                data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
              },
              series: [
                {
                  type: "bar",
                  key: "bar1",
                  name: "柱1",
                  data: [320, 332, 301, 334, 390, 330, 320],
                },
                {
                  type: "bar",
                  name: "柱2",
                  key: "bar2",
                  data: [150, 232, 201, 154, 190, 330, 410],
                },
                {
                  type: "line",
                  name: "线1",
                  key: "line1",
                  data: [220, 182, 191, 234, 290, 330, 310],
                },
                {
                  type: "line",
                  name: "线2",
                  key: "line2",
                  data: [120, 132, 101, 134, 90, 230, 210],
                },
              ],
            },
          },
          color_json: {},
          link_json: {},
          params_json: {},
        },
      },
    ];

    this.loadModule(this.moduleData);
  }
}
