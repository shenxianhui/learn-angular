import { ElementRef, OnInit, OnChanges, OnDestroy, SimpleChange } from '@angular/core';
export declare class appEchartsFilterpieLegend implements OnInit, OnChanges, OnDestroy {
    private el;
    appEchartsFilterpieLegend: any;
    chart: any;
    resizeNamespace: string;
    $elem: any;
    backEmit: any;
    that: any;
    constructor(el: ElementRef);
    renderChart(): void;
    initChart(): void;
    relieve(): void;
    ngOnInit(): void;
    ngOnChanges(changes: {
        [propKey: string]: SimpleChange;
    }): void;
    ngOnDestroy(): void;
    resize(height: any, width: any): void;
}
