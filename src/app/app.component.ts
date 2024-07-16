import { Component, ViewChild, AfterViewInit } from '@angular/core'
import { RuleExpressionComponent } from './rule-expression/rule-expression.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild(RuleExpressionComponent) ruleExpressionComponent!: RuleExpressionComponent

  ngAfterViewInit() {
    // 在这个生命周期钩子中，子组件已经初始化完成，可以安全地调用子组件的方法
  }

  handleChildMethod() {
    if (this.ruleExpressionComponent) {
      this.ruleExpressionComponent
        .onSubmitForm()
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    } else {
      console.error('子组件未初始化')
    }
  }

  onClickTitle() {
    alert('点击标题')
  }
}
