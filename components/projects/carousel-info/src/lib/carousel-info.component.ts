import { Component, OnInit } from "@angular/core";
import { PluginManagerService, componentData } from "plugin-manager";

@Component({
  selector: "lib-carousel-info",
  templateUrl: "./carousel-info.component.html",
  styleUrls: ["./carousel-info.component.styl"],
})
export class CarouselInfoComponent implements OnInit {
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
