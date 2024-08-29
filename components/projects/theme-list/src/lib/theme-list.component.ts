import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PluginManagerService, componentData } from 'plugin-manager';

const $: any = (window as any).$;

@Component({
  selector: 'lib-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.styl']
})
export class ThemeListComponent implements OnInit {

  data: any;
  color: any;
  hoverIndex: any;

  @ViewChild('tbody')
  tbodyDiv: ElementRef

  constructor(private pluginManagerService: PluginManagerService, comData: componentData) {
    // 接收中间件传值
    console.log("comData", comData)
    this.data = comData.configData.data
    this.color = comData.configData.color
  }

  ngOnInit() {
    setInterval(() => {
      let trList = this.tbodyDiv.nativeElement.querySelectorAll('tr')
      trList.forEach(element => {
        element.animate([
          { transform: 'translateY(0)' },
          { transform: 'translateY(-40px)' }
        ], {
          duration: 600,
          iterations: 1
        });
      });
      // let animation = this.tbodyDiv.nativeElement.animate([
      //   { transform: 'translateY(0)' },
      //   { transform: 'translateY(-40px)' }
      // ], {
      //   duration: 600,
      //   iterations: 1
      // });

      setTimeout(() => {
        this.data.td.push(this.data.td.shift())
      }, 600)

    }, 3000);





    // this.tbodyDiv.nativeElement.addEventListener('animationend',()=>{
    //   console.log("执行结束")
    //   this.data.td.push(this.data.td.shift())
    // })
  }

  clickRow(url) {
    console.log("点击了row", url)
    window.open(url)
  }

}
