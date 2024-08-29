import { OnInit, ElementRef } from "@angular/core";
import { PluginManagerService, componentData } from "plugin-manager";
interface ThemeData {
    color?: string;
    backgroundColor?: string;
}
export declare class ComprehensiveListComponent implements OnInit {
    private pluginManagerService;
    tbodyDiv: ElementRef;
    data: any;
    color: any;
    constructor(pluginManagerService: PluginManagerService, comData: componentData);
    ngOnInit(): void;
    getTheme(name: string): ThemeData;
    getCountryIcon(iconName: any): string;
    getBodyHeight(): string;
}
export {};
