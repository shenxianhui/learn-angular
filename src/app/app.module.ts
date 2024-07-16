import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { registerLocaleData } from '@angular/common'
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd'
import zh from '@angular/common/locales/zh'

import { AppComponent } from './app.component'
import { ChildComponent } from './child/child.component'
import { SwiperComponent } from './swiper/swiper.component'
import { ProCustomComponent } from './pro-custom/pro-custom.component'
import { TopRankComponent } from './top-rank/top-rank.component'
import { StatusRankComponent } from './status-rank/status-rank.component'
import { NoticeBarComponent } from './notice-bar/notice-bar.component'
import { InfoStatisticsComponent } from './info-statistics/info-statistics.component'
import { HighlightLabelComponent } from './highlight-label/highlight-label.component'
import { ComprehensiveListComponent } from './comprehensive-list/comprehensive-list.component'
import { RuleExpressionComponent } from './rule-expression/rule-expression.component'

registerLocaleData(zh)

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    SwiperComponent,
    ProCustomComponent,
    TopRankComponent,
    StatusRankComponent,
    NoticeBarComponent,
    InfoStatisticsComponent,
    HighlightLabelComponent,
    ComprehensiveListComponent,
    RuleExpressionComponent,
  ],
  imports: [
    BrowserModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent],
})
export class AppModule {}
