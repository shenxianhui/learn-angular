import { Type } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export declare abstract class componentData {
    configData: any;
    constructor(configData: any);
}
export declare class PluginData extends componentData {
}
export declare function createPlugin(config: {
    name: string;
    module: Type<any>;
    component: Type<any>;
}): NgPlugin;
export declare class NgPlugin {
    name: string;
    module: Type<any>;
    component: Type<any>;
    constructor(name: string, module: Type<any>, component: Type<any>);
}
export declare class PluginManagerService {
    filterVa$: BehaviorSubject<any>;
    depsDefined: boolean;
    content: any;
    name: any;
    componentData: any;
    constructor();
    compToMid(data: any): void;
    midToComp(): any;
    parentToMid(data: any): void;
    midToParent(): void;
    defineDeps(): void;
    setData(data: any): void;
    getData(): any;
    filterVal: any;
    loadModule(name: string): Promise<NgPlugin>;
}
