import { Component, OnInit } from '@angular/core';
import { PluginManagerService, componentData } from 'plugin-manager';

@Component({
  selector: 'lib-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.styl']
})
export class PlayerComponent implements OnInit {

  data: any;
  color: any;
  hoverIndex: any;

  constructor(private pluginManagerService: PluginManagerService, comData: componentData) {
    // 接收中间件传值
    console.log("comData", comData)
    this.data = comData.configData.data
    this.color = comData.configData.color
  }

  ngOnInit() {
  }

}
