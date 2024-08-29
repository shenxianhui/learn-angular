import { Component, OnInit } from '@angular/core';
import { PluginManagerService, componentData } from 'plugin-manager';

@Component({
  selector: 'lib-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.styl']
})
export class CollapseComponent implements OnInit {

  data: any;
  color: any;

  constructor(private pluginManagerService: PluginManagerService, comData: componentData) {
    // 接收中间件传值
    console.log("comData", comData)
    this.data = comData.configData.data
    let color = comData.configData.color
    this.color = {
      "firstBackground": color.firstBackground || "linear-gradient(180deg, rgba(24, 73, 110, 1) 0%, rgba(16, 42, 66, 1) 100%)", //父级面板背景
      "firstColor": color.firstColor || "#FFF", //父级文字颜色
      "firstFontSize": color.firstFontSize || "14px", //父级文字大小
      "firstPadding": color.firstPadding || "10px 16px", //父级内边距
      "firstMargin": color.firstMargin || "8px", //父级外边距
      "firstActiveBackground": color.firstActiveBackground || "linear-gradient(180deg, rgba(40, 123, 179, 1) 0%, rgba(16, 46, 73, 1) 100%)", //父级面板选中背景 
      "firstActiveColor": color.firstActiveColor || "#FFF", //父级面板选中文字颜色  
      "firstActiveFonteSize": color.firstActiveFonteSize || "14px", //父级面板选中文字大小
      "secondBackground": color.secondBackground || "linear-gradient(180deg, rgba(18, 49, 79, 1) 0%, rgba(12, 30, 51, 1) 100%)", //子级面板背景
      "secondColor": color.secondColor || "#FFF", // 子级面板文字颜色
      "secondFontSize": color.secondFontSize || "14px", // 子级面板字体大小
      "secondPadding": color.secondPadding || "10px 0 10px 28px", // 子级面板内边距
      "secondMargin": color.secondMargin || "0px", // 子级面板外边距
      "secondActiveBackground": color.secondActiveBackground || "linear-gradient(180deg, rgba(25, 74, 112, 1) 0%, rgba(15, 42, 68, 1) 100%)", // 子级面板选中背景
      "secondActiveColor": color.secondActiveColor || "#FFF", // 子级面板选中文字颜色
      "secondActiveFonteSize": color.secondActiveFonteSize || "14px" // 子级面板选中文字大小
    }

    console.log("color", this.color)
  }

  ngOnInit() {
  }

  clickFirst(item: any){
    item.isCollapse = !item.isCollapse
    console.log("clickFirst", item)
  }

}
