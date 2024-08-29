import { ElementRef, OnInit } from '@angular/core';
import { PluginManagerService, componentData } from 'plugin-manager';
export declare class FanSunburstComponent implements OnInit {
    private pluginManagerService;
    data: any;
    color: any;
    current: any;
    myChart: any;
    fansunburstDiv: ElementRef;
    constructor(pluginManagerService: PluginManagerService, comData: componentData);
    ngOnInit(): void;
    setOption(): void;
    previous(): void;
    next(): void;
}
