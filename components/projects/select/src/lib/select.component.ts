import { Component, OnInit } from "@angular/core";
import { PluginManagerService, componentData } from "plugin-manager";
import { NzMessageService } from 'ng-zorro-antd'

interface NgModelItem {
  select1Val?: string;
  select2Val?: string;
  inputVal?: string;
}

@Component({
  selector: "lib-select",
  templateUrl: "./select.component.html",
  styleUrls: ["./select.component.styl"],
})
export class SelectComponent implements OnInit {
  ngModel: NgModelItem[] = [{}];
  symbolList = [
    {
      label: "=",
      value: "=",
    },
    {
      label: "!=",
      value: "!=",
    },
    {
      label: "in",
      value: "in",
    },
    {
      label: "not in",
      value: "not in",
    },
  ];

  data: any;
  color: any;

  constructor(
    private pluginManagerService: PluginManagerService,
		private message: NzMessageService,
    comData: componentData,
  ) {
    // 接收中间件传值
    console.log("comData", comData);
    this.data = comData.configData.data;
    this.color = comData.configData.color;
  }

  ngOnInit() {}

  // 数值改变时回调
  ngModelChange(type, itm, idx) {
    console.log(type, itm, idx);
  }

  // 头部右侧按钮
  handleHeaderBtn(itm) {
    if (itm.value === "add") {
      if (this.ngModel.length >= 3) {
        this.message.create("warning", `最大数量不能超过${3}`);
        return;
      }
      this.ngModel.push({});
    }
    if (itm.value === "clear") {
      //
    }
  }

  // 行-删除
  handleDel(itm, idx) {
    this.ngModel.splice(idx, 1);
  }

  // 尾部按钮
  handleBottomBtn(itm) {
    if (itm.value === "search") {
      this.checkedForm()
        .then((res) => {
          console.log(JSON.stringify(this.ngModel));
          alert(JSON.stringify(this.ngModel));
        })
        .catch((err = {}) => {
          const { row, name, message } = err;

          this.message.create("error", `[第${row + 1}行-${name}]: ${message}`);
        });
    }
  }

  // 校验
  checkedForm() {
    return new Promise((resolve, reject) => {
      const validationRule = this.data.validationRule || [];

      if (validationRule.length) {
        const checkedSelect1 = validationRule.find(
          (item) => item.name === "select1"
        );
        const checkedSelect2 = validationRule.find(
          (item) => item.name === "select2"
        );
        const checkedInput = validationRule.find(
          (item) => item.name === "input"
        );
        let res = {
          row: -1,
          name: "",
          message: "",
        };

        for (let i = 0; i < this.ngModel.length; i++) {
          const item = this.ngModel[i] || {};

          if (checkedSelect1 && !item.select1Val) {
            res = {
              row: i,
              ...checkedSelect1,
            };
            break;
          }
          if (checkedSelect2 && !item.select2Val) {
            res = {
              row: i,
              ...checkedSelect2,
            };
            break;
          }
          if (checkedInput && !item.inputVal) {
            res = {
              row: i,
              ...checkedInput,
            };
            break;
          }
        }

        if (res.row > -1) {
          reject(res);
        } else {
          resolve(true);
        }
      } else {
        resolve(true);
      }
    });
  }
}
