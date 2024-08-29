import { OnInit } from "@angular/core";
import { PluginManagerService, componentData } from "plugin-manager";
import { NzMessageService } from "ng-zorro-antd";
interface NgModelItem {
    select1Val?: string;
    select2Val?: string;
    inputVal?: string;
}
export declare class RuleExpressionComponent implements OnInit {
    private pluginManagerService;
    private message;
    configData: any;
    ngModel: NgModelItem[];
    symbolList: {
        label: string;
        value: string;
    }[];
    data: any;
    color: any;
    containerOperate: any;
    constructor(pluginManagerService: PluginManagerService, message: NzMessageService, comData: componentData);
    ngOnInit(): void;
    onSubmitForm(): Promise<{}>;
    ngModelChange(type: any, itm: any, idx: any): void;
    handleHeaderBtn(itm: any): void;
    handleDel(itm: any, idx: any): void;
    handleBottomBtn(itm: any): void;
    checkedForm(): Promise<{}>;
}
export {};
