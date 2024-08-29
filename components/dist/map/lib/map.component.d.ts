import { OnInit } from '@angular/core';
import { PluginManagerService, componentData } from 'plugin-manager';
export declare class MapComponent implements OnInit {
    private pluginManagerService;
    selectData: any;
    timeIndex: string;
    data: any;
    nums: number;
    scatterData3: any;
    constructor(pluginManagerService: PluginManagerService, comData: componentData);
    ngOnInit(): void;
    goChangeCurrent(index: any): void;
}
