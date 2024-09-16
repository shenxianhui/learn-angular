import { Component, OnInit } from '@angular/core'
import schema from './schema.json'

interface Format {
  data: any
}

const { sampleCode, data: data_json } = schema
const { format = {} as Format } = data_json || {}
const { data = {} } = format
const color_json = sampleCode.replace(/'/g, '"') || '{}'
const color = JSON.parse(color_json)

const { list = [] } = data

@Component({
  selector: 'app-stage-node',
  templateUrl: './stage-node.component.html',
  styleUrls: ['./stage-node.component.less'],
})
export class StageNodeComponent implements OnInit {
  data: any = data
  color: any = color
  list: any = list

  constructor() {}

  ngOnInit() {}

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

  getSteps(row = {}) {
    const { steps = [] } = row
    const arr = steps.concat([''])

    return arr
  }
}
