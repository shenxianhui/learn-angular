import { OnInit, ElementRef } from '@angular/core';
import { PluginManagerService, componentData } from 'plugin-manager';
export declare class UnitFoShanMapComponent implements OnInit {
    private pluginManagerService;
    selectData: any;
    timeIndex: string;
    data: any;
    nums: number;
    scatterData3: any;
    myChart: any;
    curOption: any;
    curInterval: any;
    colorJson: any;
    unitmapDiv: ElementRef;
    constructor(pluginManagerService: PluginManagerService, comData: componentData);
    ngOnInit(): void;
    goChangeCurrent(index: any): void;
    goDetailPage(url: any): void;
    formatData(arrList: any): void;
    startDotInterval(): void;
    initChart(optionData?: any[]): void;
}
