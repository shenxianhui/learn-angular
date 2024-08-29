import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { scaleStyle } from '../constant';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.styl']
})
export class LayoutComponent implements OnInit {
    // 简易模式下，X轴放大，Y轴缩放比例不受影响
    @Input() simpleMode = false;

    $elem: any;
    constructor(private el: ElementRef) {
        this.$elem = el.nativeElement;
    }

    ngOnInit() {
        this.setStyle();
    }

    setStyle() {
        const scale = scaleStyle(this.simpleMode);
        // if (scale.transform.length === 0) {
        //     // 标准分辨率
        //     this.$elem.getElementsByClassName('svg')[0].style.top = '0px';
        //     this.$elem.getElementsByClassName('svg')[0].style.left = '0px';
        // } else {
        //     // 非标准分辨率
        //     this.$elem.getElementsByClassName('svg')[0].style.top = '50%';
        //     this.$elem.getElementsByClassName('svg')[0].style.left = '50%';
        // }
        // this.$elem.getElementsByClassName('svg')[0].style.transform = scale.transform;
        // this.$elem.getElementsByClassName('svg')[0].style.height = scale.height + 'px';
        // this.$elem.getElementsByClassName('e.wisvg')[0].styldth = scale.width + 'px';
        // this.$elem.getElementsByClassName('svg')[0].style.height = Number(scale.innerHeight / scale.scaleVal).toFixed(0) + 'px';
        // this.$elem.getElementsByClassName('svg')[0].style.width = Number(scale.innerWidth / scale.scaleVal).toFixed(0) + 'px';
    }

}
