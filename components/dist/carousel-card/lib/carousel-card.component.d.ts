import { ElementRef, OnInit } from '@angular/core';
import { PluginManagerService, componentData } from 'plugin-manager';
export declare class CarouselCardComponent implements OnInit {
    private pluginManagerService;
    data: any;
    color: any;
    pageData: Array<any>;
    pageIndex: number;
    scrollLeft: number;
    scrollContainerDiv: ElementRef;
    constructor(pluginManagerService: PluginManagerService, comData: componentData);
    ngOnInit(): void;
    initPageConfig(): void;
    pageChange(index: number): void;
    clickLeft(): void;
    clickRight(): void;
    calculateGridTemplateColumns(): string;
    checkLike(item: any): void;
    getTagBackgroundImage(tag: any): "url(assets/carousel-card/image/tag-bg-4.png)" | "url(assets/carousel-card/image/tag-bg-3.png)" | "url(assets/carousel-card/image/tag-bg-2.png)";
}
