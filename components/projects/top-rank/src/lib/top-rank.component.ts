import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { PluginManagerService, componentData } from "plugin-manager";

@Component({
  selector: "lib-top-rank",
  templateUrl: "./top-rank.component.html",
  styleUrls: ["./top-rank.component.styl"],
})
export class TopRankComponent implements OnInit {
  @ViewChild("tbody")
  tbodyDiv: ElementRef;
  @ViewChild("rowbody")
  rowbodyDiv: ElementRef;
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

  ngOnInit() {
    if (this.data.rollingDirection == 'row') {
      if (this.data.list.length <= 2) {
        return
      }
      setInterval(() => {
        let trList = this.rowbodyDiv.nativeElement.querySelectorAll(".second-wrap");
        trList.forEach((element, index) => {
          element.animate(
            [
              { transform: "translateX(0)" },
              { transform: "translateX(calc(-100% + -20px))" }
            ],
            {
              duration: 500,
              iterations: 1,
            }
          );
        });

        setTimeout(() => {
          this.data.list.push(this.data.list.shift());
        }, 500);
      }, 3000);
    } else {
      let rollingNum = this.data.rollingNum || 3
      if (this.data.list.length <= rollingNum) {
        return
      }
      const animateElements = () => {
        let trList = this.tbodyDiv.nativeElement.querySelectorAll(".fourth-wrap");

        trList.forEach((element, index) => {
          if (index == 0) {
            element.style.transform = "translateY(-10px) rotateX(90deg)";
            trList[0].style.opacity = "0";
            return
          }
          element.style.transform = "translateY(-44px)";
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
  }

  getBodyHeight() {
    const rollingNum = this.data.rollingNum;
    const num = rollingNum ? (rollingNum * 43) + 'px' : '100%';
    return num;
  }
}
