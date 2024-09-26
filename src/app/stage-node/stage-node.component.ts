import { Component, HostListener, OnInit, Renderer2 } from '@angular/core'
import schema from './schema.json'

interface Format {
  data: any
}
interface RowType {
  steps?: string[]
}

const { sampleCode, data: data_json } = schema
const { format = {} as Format } = data_json || {}
const { data = {} } = format
const color_json = sampleCode.replace(/'/g, '"') || '{}'
const color = JSON.parse(color_json)

const { activeIndex = {}, list = [] } = data

@Component({
  selector: 'app-stage-node',
  templateUrl: './stage-node.component.html',
  styleUrls: ['./stage-node.component.less'],
})
export class StageNodeComponent implements OnInit {
  data: any = data
  color: any = color
  list: any = list
  activeIndex: any = activeIndex
  scale: number = 1

  constructor(private renderer: Renderer2) {}

  // 监听窗口大小变化事件
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    // this.setScale()
  }

  ngOnInit() {
    // this.setScale()
  }

  // 设置缩放比例
  private setScale(): void {
    const stageNode = document.querySelector('.stage-node') as HTMLElement
    const designWidth = 1920
    const designHeight = 1080

    const scaleX = window.innerWidth / designWidth
    const scaleY = window.innerHeight / designHeight

    const scale = Math.min(scaleX, scaleY) // 等比缩放

    // 设置缩放
    this.renderer.setStyle(stageNode, 'transform', `translate(-50%, -50%) scale(${scale})`)
  }

  getRowTransform(rowIdx: number): string {
    const spacing = 140 // 偏移距离
    const rowsCount = this.list.length // 动态获取行数
    const middleRowIdx = Math.floor((rowsCount - 1) / 2) // 中间行的索引

    // 偶数行：需要调整逻辑，确保两侧的行对称居中
    if (rowsCount % 2 === 0) {
      if (rowIdx < middleRowIdx) {
        // 上半部分的行向左偏移
        return `translateX(-${(middleRowIdx - rowIdx + 0.5) * spacing}px)`
      } else if (rowIdx > middleRowIdx + 1) {
        // 下半部分的行向右偏移
        return `translateX(${(rowIdx - (middleRowIdx + 1) + 0.5) * spacing}px)`
      } else if (rowIdx === middleRowIdx) {
        // 左中间行向左偏移
        return `translateX(-${spacing / 2}px)`
      } else if (rowIdx === middleRowIdx + 1) {
        // 右中间行向右偏移
        return `translateX(${spacing / 2}px)`
      }
    }

    // 奇数行：中间行不偏移，其他行根据距离中心的行索引偏移
    if (rowsCount % 2 !== 0) {
      if (rowIdx < middleRowIdx) {
        return `translateX(-${(middleRowIdx - rowIdx) * spacing}px)`
      } else if (rowIdx > middleRowIdx) {
        return `translateX(${(rowIdx - middleRowIdx) * spacing}px)`
      }
    }

    return 'translateX(0px)' // 中间行不偏移
  }

  getSteps(row: RowType = {}): string[] {
    const { steps = [] } = row
    const arr = steps.concat([''])

    return arr
  }
}
