import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.less"],
})
export class ChildComponent implements OnInit {
  @Input() title!: string;
  @Output() clickTitle = new EventEmitter();

  content = "内容";
  list = [
    {
      name: "张三",
    },
    {
      name: "李四",
    },
    {
      name: "王五",
    },
  ];
  show = true;

  constructor() {}

  ngOnInit() {}

  onClickContent() {
    alert("点击内容");
  }
}
