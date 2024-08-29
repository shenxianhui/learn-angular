import { NgModule } from '@angular/core';
import { ComprehensiveListComponent } from './comprehensive-list.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common'

@NgModule({
  declarations: [ComprehensiveListComponent],
  entryComponents: [ComprehensiveListComponent],
  imports: [CommonModule, NgZorroAntdModule],
  exports: [ComprehensiveListComponent]
})

export class ComprehensiveListModule { }
