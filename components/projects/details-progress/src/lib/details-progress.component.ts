import { Component, OnInit } from "@angular/core";
import { PluginManagerService, componentData } from "plugin-manager";

@Component({
  selector: "lib-details-progress",
  templateUrl: "./details-progress.component.html",
  styleUrls: ["./details-progress.component.styl"],
})
export class DetailsProgressComponent implements OnInit {
  data: any;
  color: any;

  constructor(
    private pluginManagerService: PluginManagerService,
    comData: componentData
  ) {
    // 接收中间件传值
    console.log("comData", comData);
    this.data = comData.configData.data;
    this.color = comData.configData.color;
  }

  ngOnInit() {}
}
