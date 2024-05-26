import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-pro-custom',
  templateUrl: './pro-custom.component.html',
  styleUrls: ['./pro-custom.component.less'],
})
export class ProCustomComponent implements OnInit {
  data = {
    title: '示例',
  }
  color = {
    color: '#f00',
  }

  ngOnInit() {}
}
