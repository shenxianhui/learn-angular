import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PluginManagerService, componentData } from 'plugin-manager';

@Component({
  selector: 'lib-base-filter',
  templateUrl: './base-filter.component.html',
  styleUrls: ['./base-filter.component.styl']
})
export class BaseFilterComponent implements OnInit {
  // @Output() outbound = new EventEmitter();
  selectData: any = [];
  timeIndex = '';
  data: any;
  constructor(
    private pluginManagerService: PluginManagerService,
    comData: componentData) {
    // 接收中间件传值
    this.data = comData.configData;
    console.log(this.data, 'this.data')
  }
  ngOnInit() {
    if (!this.data.data) {
      console.log('进来了');
    }
    if (this.data && this.data.data) {
      this.selectData = this.data.data;
      this.timeIndex = this.data.data.check[0];

    }
  }

  getFilterInfo(e) {
    this.timeIndex = e;
    this.pluginManagerService.compToMid([{ key: this.data.data.key[0], data: e }]);
  }
}
