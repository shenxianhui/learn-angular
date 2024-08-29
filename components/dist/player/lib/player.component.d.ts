import { OnInit } from '@angular/core';
import { PluginManagerService, componentData } from 'plugin-manager';
export declare class PlayerComponent implements OnInit {
    private pluginManagerService;
    data: any;
    color: any;
    hoverIndex: any;
    constructor(pluginManagerService: PluginManagerService, comData: componentData);
    ngOnInit(): void;
}
