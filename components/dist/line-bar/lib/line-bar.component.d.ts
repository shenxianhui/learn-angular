import { OnInit } from "@angular/core";
import { PluginManagerService, componentData } from "plugin-manager";
export declare class LineBarComponent implements OnInit {
    private pluginManagerService;
    data: any;
    color: any;
    chartOptions: any;
    chart: any;
    resizeTimer: any;
    constructor(pluginManagerService: PluginManagerService, comData: componentData);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    initChart(): void;
    renderChart(): void;
}
