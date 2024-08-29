import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PluginManagerService, componentData } from 'plugin-manager';

@Component({
  selector: 'lib-info-statistics',
  templateUrl: './info-statistics.component.html',
  styleUrls: ['./info-statistics.component.styl']
})
export class InfoStatisticsComponent implements OnInit {
  @ViewChild("tbody")
  tbodyDiv: ElementRef;
  data: any;
  color: any;

  constructor(private pluginManagerService: PluginManagerService, comData: componentData) {
    // 接收中间件传值
    console.log("comData", comData)
    this.data = comData.configData.data
    this.color = comData.configData.color
  }

  ngOnInit() {
    let rollingNum = this.data.rollingNum || 3
    if (this.data.list.length <= rollingNum) {
      return
    }
    const animateElements = () => {
      let trList = this.tbodyDiv.nativeElement.querySelectorAll(".progressbar");


      trList.forEach((element, index) => {
        if (index == 0) {
          element.style.transform = "translateY(-10px) rotateX(90deg)";
          trList[0].style.opacity = "0";
          return
        }
        element.style.transform = "translateY(-43px)";
      });

      setTimeout(() => {
        this.data.list.push(this.data.list.shift());

        trList.forEach((element) => {
          element.style.transition = "none";
          element.style.transform = "translate(0,0)";
          element.style.opacity = "none";
          element.style.opacity = "1";
          element.offsetHeight;
          element.style.transition = "all 0.5s ease";
        });
      }, 500);
    };
    setInterval(animateElements, 3000);


  }

  getBodyHeight() {
    const rollingNum = this.data.rollingNum;
    const num = rollingNum ? (rollingNum * 43) + 'px' : '100%';
    return num;
  }
}
