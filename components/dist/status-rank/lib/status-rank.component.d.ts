import { OnInit, ElementRef } from "@angular/core";
import { PluginManagerService, componentData } from "plugin-manager";
export declare class StatusRankComponent implements OnInit {
    private pluginManagerService;
    tbodyDiv: ElementRef;
    data: any;
    color: any;
    constructor(pluginManagerService: PluginManagerService, comData: componentData);
    getPercentage(value: any, list?: any[]): string;
    ngOnInit(): void;
    getBodyHeight(): string;
}
