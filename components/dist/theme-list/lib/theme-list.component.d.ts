import { ElementRef, OnInit } from '@angular/core';
import { PluginManagerService, componentData } from 'plugin-manager';
export declare class ThemeListComponent implements OnInit {
    private pluginManagerService;
    data: any;
    color: any;
    hoverIndex: any;
    tbodyDiv: ElementRef;
    constructor(pluginManagerService: PluginManagerService, comData: componentData);
    ngOnInit(): void;
    clickRow(url: any): void;
}
