import { Component, Input, OnInit, ElementRef, SimpleChange, OnChanges } from '@angular/core';
import { PluginManagerService, componentData } from 'plugin-manager';

const $: any = (window as any).$;

@Component({
    selector: 'lib-doughnut',
    templateUrl: './doughnut.component.html',
    styleUrls: ['./doughnut.component.styl']
})
export class DoughnutComponent implements OnInit {

    moduleData: any = [0, null, false];

    $elem: any;

    // 环图配置项
    donutChartData: any;

    doughnutData: any = {}

    // 分页的初始数据
    leftActive = true;
    rightActive = false;
    leftText = '';
    rightText = '';
    btnShowIndex = 1;

    // 切换的初始数据
    switchAcitveIndex = 0;
    switchInfo = [
        {
            "switchText": "基本环图1",
            "rangeData": [0, 3]
        },
        {
            "switchText": "基本环图2",
            "rangeData": [4, 5]
        },
        {
            "switchText": "基本环图3",
            "rangeData": [6, 9]
        },
        {
            "switchText": "基本环图4",
            "rangeData": [10, 12]
        },
        {
            "switchText": "基本环图5",
            "rangeData": [3, 9]
        },
        {
            "switchText": "基本环图6",
            "rangeData": [0, 11]
        }
    ]
    switchColor: any = ['#55a722', '#ff7e75', '#0099ff', '#d284d9', '#ffbb29'];

    // 当前环形图展示的数据
    currentShowData: any;
    // 环图的默认颜色配置
    doughnutColor: any = ['rgb(253,97,55)', 'rgb(248,193,71)', 'rgb(53,100,255)', 'rgb(35,170,241)', 'rgb(2,207,150)', '#d284d9'];

    // 图例的宽度
    legendWidth: any = undefined;
    legendTop: any = "10%"

    // loading判断
    pageLoading = true;
    switchLoading = true;

    // 中间件传递过来的模拟数据
    configData: any;

    constructor(private el: ElementRef,
        private pluginManagerService: PluginManagerService,
        comData: componentData) {
        this.$elem = $(this.el.nativeElement);
        // 接收中间件传值
        this.configData = comData.configData;
    }

    // appEchartsFilterpieLegend指令数据相关
    that = this
    chart: any;
    backEmit(e) {
        if (!!e) {
            this.chart = e;
        }
    }
    onResize() {
        this.chart && this.chart.resize()
    }

    ngOnInit() {
        this.fetchData(false)
    }

    // pageInfo存在时的操作
    pageOperation() {
        // 深拷贝一份分页数据
        let page = JSON.parse(JSON.stringify(this.doughnutData.pageInfo));
        this.pageLoading = false;
        this.leftText = page.leftText;
        this.rightText = page.rightText;

        if (this.doughnutData.data.length > page.onePageShowNum) {
            // 分页展示的数据区间
            let startNum = page.onePageShowNum * (this.btnShowIndex - 1);
            let endNum = startNum + page.onePageShowNum;
            this.currentShowData = this.doughnutData.data.slice(startNum, endNum);
        } else {
            this.currentShowData = this.doughnutData.data;
        }
    }

    // pageInfo不存在时，重置分页的配置
    pageReset() {
        this.pageLoading = true
        this.leftActive = true;
        this.rightActive = false;
        this.leftText = '';
        this.rightText = '';
        this.btnShowIndex = 1;
    }

    // 分页的两个按钮触发此方法，点击左右切换页数
    pageBtn(btnStatus) {
        if (btnStatus === "leftActive") {
            if (this.btnShowIndex <= 1) {
                this.btnShowIndex = 1
            } else {
                this.btnShowIndex = this.btnShowIndex - 1
            }
            this.leftActive = true
            this.rightActive = false
        } else {
            if (this.btnShowIndex >= Math.ceil(this.doughnutData.data.length / this.doughnutData.pageInfo.onePageShowNum)) {
                this.btnShowIndex = Math.ceil(this.doughnutData.data.length / this.doughnutData.pageInfo.onePageShowNum)
            } else {
                this.btnShowIndex++
            }
            this.leftActive = false
            this.rightActive = true

        }
        this.fetchData(this.moduleData[2]);
    }

    // switchInfo存在时的操作
    switchOperation() {
        // 深拷贝一份切换数据
        this.switchInfo = JSON.parse(JSON.stringify(this.doughnutData.switchInfo));
        // 如果方块颜色没有被模拟数据赋值，或者给了个空数组，那么给方块颜色一个默认值
        if (this.switchColor === undefined || this.switchColor.length === 0) {
            this.switchColor = ["#55a722", "#ff7e75", "#0099ff", "#d284d9", "#ffbb29"];
        }
        // switchInfo里每一项添加switchColor属性，方便遍历
        this.switchInfo.forEach((switchData, index) => {
            switchData["switchColor"] = this.switchColor[index % this.switchColor.length]

        })

        this.switchLoading = false;
        let curSwitchData = this.switchInfo[this.switchAcitveIndex];

        // 这里是考虑到当活跃状态的展示数据被删了后，当前下标没有数据了，那么重置当前下标，默认指向第一个
        if (!curSwitchData) {
            this.switchAcitveIndex = 0;
            curSwitchData = this.switchInfo[0];
        }

        // 根据模拟数据中配置的数据区间，取得当前展示的数据
        this.currentShowData = this.doughnutData.data.slice(curSwitchData.rangeData[0], curSwitchData.rangeData[1] + 1);
    }

    // switchInfo不存在时，重置切换的配置
    switchReset() {
        this.switchLoading = true;
        this.switchAcitveIndex = 0;
        this.switchInfo = [
            {
                "switchText": "基本环图1",
                "rangeData": [0, 3]
            },
            {
                "switchText": "基本环图2",
                "rangeData": [4, 5]
            },
            {
                "switchText": "基本环图3",
                "rangeData": [6, 9]
            },
            {
                "switchText": "基本环图4",
                "rangeData": [10, 12]
            },
            {
                "switchText": "基本环图5",
                "rangeData": [3, 9]
            },
            {
                "switchText": "基本环图6",
                "rangeData": [0, 11]
            }
        ]
        this.switchColor = [];
    }

    // 点击switchBox 触发此方法，按当前活跃的index获取switchInfo中下标对应的数据
    switchBtn(i) {
        this.switchAcitveIndex = i;
        this.fetchData(this.moduleData[2]);
    }

    fetchData(loading) {
        if (this.configData.data && this.configData.data.data instanceof Array) {
            this.doughnutData = JSON.parse(JSON.stringify(this.configData.data));
        }

        if (this.configData.color) {
            if (this.configData.color.switchColor instanceof Array) {
                this.switchColor = this.configData.color.switchColor.length !== 0 ? this.configData.color.switchColor : this.switchColor;
            }

            if (this.configData.color.doughnutColor instanceof Array) {
                this.doughnutColor = this.configData.color.doughnutColor.length !== 0 ? this.configData.color.doughnutColor : this.doughnutColor;
            }
            if(this.configData.color.legendWidth){
                this.legendWidth = this.configData.color.legendWidth
            }

            if(this.configData.color.legendTop){
                this.legendTop = this.configData.color.legendTop
            }
            
        }

        // 分页和切换配置项均存在时，默认展示切换模式
        switch (true) {
            case !!this.doughnutData.switchInfo:
                // 如果切换配置信息存在
                this.switchOperation();
                break;
            case !!this.doughnutData.pageInfo:
                // 如果切换配置信息不存在，但是分页配置信息存在
                this.switchReset();
                this.pageOperation();
                break;
            default:
                // 分页与切换数据均不存在时，重置配置，展示全部数据
                this.switchReset();
                this.pageReset();
                this.currentShowData = this.doughnutData.data;
        }


        // 环图配置项
        this.donutChartData = {
            theme: 'dark',
            color: this.doughnutColor, // 环图的颜色
            legendX: 'right',
            legendWidth: this.legendWidth, // 图例的宽度
            legendTop: this.legendTop, // 图例的上下位置
            formatValue: 'format',
            seriesData: this.currentShowData,
            title: {
                titleNum: this.doughnutData.title ? this.doughnutData.title.titleNum : "",
                titleText: this.doughnutData.title ? this.doughnutData.title.titleText : "",
            },
            tooltip: {
                position: ['30%', '50%']
            },
            radius: ['60%', '75%'],
            radius1: ['50%', '60%']
        };

    }
}
