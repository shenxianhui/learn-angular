import { OnInit } from "@angular/core";
import { PluginManagerService, componentData } from "plugin-manager";
export declare class HighlightLabelComponent implements OnInit {
    private pluginManagerService;
    data: any;
    color: any;
    isActive: boolean;
    constructor(pluginManagerService: PluginManagerService, comData: componentData);
    ngOnInit(): void;
    onMouseEnter(): void;
    onMouseLeave(): void;
}
