import { OnInit } from "@angular/core";
import { PluginManagerService, componentData } from "plugin-manager";
export declare class DetailsProgressComponent implements OnInit {
    private pluginManagerService;
    data: any;
    color: any;
    constructor(pluginManagerService: PluginManagerService, comData: componentData);
    ngOnInit(): void;
}
