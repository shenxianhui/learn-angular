import { Component, OnInit } from "@angular/core";
import { PluginManagerService, componentData } from "plugin-manager";

@Component({
  selector: "lib-highlight-label",
  templateUrl: "./highlight-label.component.html",
  styleUrls: ["./highlight-label.component.styl"],
})
export class HighlightLabelComponent implements OnInit {
  data: any;
  color: any;
  isActive = false;

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

  onMouseEnter() {
    this.isActive = true;
  }

  onMouseLeave() {
    this.isActive = false;
  }
}
