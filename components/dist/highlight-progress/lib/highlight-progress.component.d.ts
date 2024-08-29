import { OnInit } from "@angular/core";
import { componentData } from "plugin-manager";
export declare class HighlightProgressComponent implements OnInit {
    data: any;
    color: any;
    progress: number;
    constructor(comData: componentData);
    ngOnInit(): void;
}
