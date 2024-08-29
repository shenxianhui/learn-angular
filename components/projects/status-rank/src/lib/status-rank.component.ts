import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { PluginManagerService, componentData } from "plugin-manager";

@Component({
  selector: "lib-status-rank",
  templateUrl: "./status-rank.component.html",
  styleUrls: ["./status-rank.component.styl"],
})
export class StatusRankComponent implements OnInit {
  @ViewChild("tbody")
  tbodyDiv: ElementRef;
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

  getPercentage(value, list = []) {
    let total = 0;

    list.forEach((item) => {
      total += item.value;
    });

    return (value / total) * 100 + "%";
  }

  ngOnInit() {
    let rollingNum = this.data.rollingNum || 3
    if (this.data.list.length <= rollingNum) {
      return
    }

    const animateElements = () => {
      const trList = this.tbodyDiv.nativeElement.querySelectorAll(".wrap");


      trList.forEach((element, index) => {
        if (index == 0) {
          element.style.transform = "translateY(-10px) rotateX(90deg)";
          trList[0].style.opacity = "0";
          return
        }
        element.style.transform = "translateY(-92px)";
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
    const dataLength = this.data.list.length;
    const rollingNum = this.data.rollingNum;
    const num = dataLength > rollingNum ? rollingNum : dataLength;

    return num * 72 + (num - 1) * 20 + "px";
  }
}
