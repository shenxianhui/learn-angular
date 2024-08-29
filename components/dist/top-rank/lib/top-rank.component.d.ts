import { OnInit, ElementRef } from "@angular/core";
import { PluginManagerService, componentData } from "plugin-manager";
export declare class TopRankComponent implements OnInit {
    private pluginManagerService;
    tbodyDiv: ElementRef;
    rowbodyDiv: ElementRef;
    data: any;
    color: any;
    constructor(pluginManagerService: PluginManagerService, comData: componentData);
    ngOnInit(): void;
    getBodyHeight(): string;
}
