import { ElementRef, OnInit } from '@angular/core';
import { PluginManagerService, componentData } from 'plugin-manager';
export declare class ThemeAreaLineComponent implements OnInit {
    private pluginManagerService;
    data: any;
    color: any;
    svgCur: any;
    resizeTimer: any;
    themelineDiv: ElementRef;
    constructor(pluginManagerService: PluginManagerService, comData: componentData);
    ngOnInit(): void;
    initChart(): void;
}
