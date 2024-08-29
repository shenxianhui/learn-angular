import { Component, OnInit } from "@angular/core";
import { PluginManagerService, componentData } from "plugin-manager";

@Component({
  selector: "lib-highlight-progress",
  templateUrl: "./highlight-progress.component.html",
  styleUrls: ["./highlight-progress.component.styl"],
})
export class HighlightProgressComponent implements OnInit {
  data: any;
  color: any;
  progress = 0;

  constructor(comData: componentData) {
    // 接收中间件传值
    console.log("comData", comData);
    this.data = comData.configData.data;
    this.color = comData.configData.color;
  }

  ngOnInit() {
    setTimeout(() => {
      this.progress = 100;
    }, 1000);
  }
}
