import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { PluginManagerService, componentData } from "plugin-manager";

interface ThemeData {
  color?: string;
  backgroundColor?: string;
}
interface ColorData {
  colType?: Array<string>;
  themeMap?: string;
}
@Component({
  selector: "lib-comprehensive-list",
  templateUrl: "./comprehensive-list.component.html",
  styleUrls: ["./comprehensive-list.component.styl"],
})
export class ComprehensiveListComponent implements OnInit {
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
    this.color = {
      viewNum: 5,
      colType: ["dot", "icon", "text", "text"],
      themeMap: {
        red: {
          color: "#FF435B",
          backgroundColor: "#FF435B",
        },
        yellow: {
          color: "#FFBF59",
          backgroundColor: "#FFBF59",
        },
        blue: {
          color: "#52D2FF",
          backgroundColor: "#52D2FF",
        },
      },
      ...(comData.configData.color || {}),
    };
  }

  ngOnInit() {
    let viewNum = this.color.viewNum || 5;
    if (this.data.td.length <= viewNum) {
      return;
    }
    const animateElements = () => {
      const trList = this.tbodyDiv.nativeElement.querySelectorAll(".second-wrap");


      trList.forEach((element, index) => {
        if (index == 0) {
          element.style.transform = "translateY(-10px) rotateX(90deg)";
          trList[0].style.opacity = "0";
          return
        }
        element.style.transform = "translateY(-43px)";
      });

      setTimeout(() => {
        this.data.td.push(this.data.td.shift());

        trList.forEach((element) => {
          element.style.transition = "none";
          element.style.transform = "translate(0,0)";
          element.style.opacity = "none";
          element.style.opacity = "1";
          element.offsetHeight;
          element.style.transition = "transform 0.5s ease, opacity 0.5s ease";
        });
      }, 300);
    };
    setInterval(animateElements, 3000);
  }

  getTheme(name: string): ThemeData {
    const colorData: ColorData = this.color;
    const themes = Object.entries(colorData.themeMap || {}).map((item) => {
      const key = item[0];
      const val = item[1] || {};

      return {
        name: key,
        data: val,
      };
    });
    const data = themes.find((item) => item.name === name);

    return data ? data.data : {};
  }
  getCountryIcon(iconName) {
    return `assets/comprehensive-list/image/${iconName}.png`;
  }

  getBodyHeight() {
    const viewNum = this.color.viewNum;
    let hPx = 43 + viewNum * 43 + "px"
    return viewNum ? hPx : '100%';
  }
}
