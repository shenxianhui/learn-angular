import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PluginManagerService, componentData } from 'plugin-manager';

@Component({
  selector: 'llib-carousel-card',
  templateUrl: './carousel-card.component.html',
  styleUrls: ['./carousel-card.component.styl']
})
export class CarouselCardComponent implements OnInit {

  data: any;
  color: any;
  pageData: Array<any>;
  pageIndex: number = 0;
  scrollLeft: number = 0;

  @ViewChild('scrollContainer')
  scrollContainerDiv: ElementRef


  constructor(private pluginManagerService: PluginManagerService, comData: componentData) {
    // 接收中间件传值
    console.log("comData", comData)
    this.data = comData.configData.data
    this.color = comData.configData.color
  }

  ngOnInit() {
    if (!this.data.autoplay) {
      this.initPageConfig()
    }
  }

  initPageConfig() {
    console.log("执行initPageConfig")
    let num = 0 //总共多少块 small占1 medium占2
    let columns = this.data.columns //每行多少个
    let onePageCardNum = 4 * columns //每页最多多少个

    let pageData = []

    let currentPage = []; // 存储当前页的数据
    let remainingBlocks = onePageCardNum; // 当前页剩余可容纳块数

    for (const item of this.data.list) {
      let blockCount = 0; // 当前item占据的块数
      if (item.size === "small") {
        blockCount = 1
      } else if (item.size === "medium") {
        blockCount = 2
      } else {
        blockCount = 1
      }

      num += blockCount

      // 如果当前item可以放入当前页
      if (blockCount <= remainingBlocks) {
        currentPage.push(item);
        remainingBlocks -= blockCount;
      }

      // 如果当前页已满，将当前页数据添加到二维数组中，并重新初始化当前页
      if (remainingBlocks <= 0) {
        pageData.push(currentPage);
        currentPage = [];
        remainingBlocks = onePageCardNum;
      }
    }

    // 处理最后一页，如果有剩余块数，添加到二维数组中
    if (currentPage.length > 0) {
      pageData.push(currentPage);
    }

    let pageCount = Math.ceil(num / onePageCardNum)
    console.log("num", num)
    console.log("pageCount", pageCount)
    console.log("pageData", pageData)
    this.pageData = pageData
  }

  pageChange(index: number) {
    if (index < 0) {
      return
    }
    if (index > this.pageData.length - 1) {
      return
    }
    this.pageIndex = index
    console.log("pageIndex", this.pageIndex)
  }

  clickLeft() {
    const container = this.scrollContainerDiv.nativeElement
    let px = 256 * (this.data.playCardNum || 1)
    this.scrollLeft = container.scrollLeft - px
    container.scrollLeft -= px;
  }

  clickRight() {
    const container = this.scrollContainerDiv.nativeElement
    let px = 256 * (this.data.playCardNum || 1)
    this.scrollLeft = container.scrollLeft + px
    container.scrollLeft += px;
  }

  calculateGridTemplateColumns() {
    return this.data.columns ? `repeat(${this.data.columns}, 1fr)` : 'repeat(4, 1fr)';
  }

  checkLike(item) {
    item.isLike = !item.isLike
  }

  getTagBackgroundImage(tag) {
    let length = tag.length
    console.log("tag", length)
    if (length >= 4) {
      return 'url(assets/carousel-card/image/tag-bg-4.png)'
    } else if (length >= 3) {
      return 'url(assets/carousel-card/image/tag-bg-3.png)'
    } else {
      return 'url(assets/carousel-card/image/tag-bg-2.png)'
    }
  }

}
