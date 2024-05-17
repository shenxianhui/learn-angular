import { Component, Input, Output, EventEmitter } from '@angular/core'

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.less'],
})
export class ChildComponent {
  @Input() title!: string
  @Output() clickTitle = new EventEmitter()

  content = '内容'

  onClickContent() {
    alert('点击内容')
  }
}
