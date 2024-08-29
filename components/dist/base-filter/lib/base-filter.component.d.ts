import { OnInit } from '@angular/core';
import { PluginManagerService, componentData } from 'plugin-manager';
export declare class BaseFilterComponent implements OnInit {
    private pluginManagerService;
    selectData: any;
    timeIndex: string;
    data: any;
    constructor(pluginManagerService: PluginManagerService, comData: componentData);
    ngOnInit(): void;
    getFilterInfo(e: any): void;
}
