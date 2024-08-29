import { OnInit, ElementRef } from '@angular/core';
import { PluginManagerService, componentData } from 'plugin-manager';
export declare class InfoStatisticsComponent implements OnInit {
    private pluginManagerService;
    tbodyDiv: ElementRef;
    data: any;
    color: any;
    constructor(pluginManagerService: PluginManagerService, comData: componentData);
    ngOnInit(): void;
    getBodyHeight(): string;
}
