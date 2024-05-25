import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { SwiperComponent } from './swiper/swiper.component';
import { ProCustomComponent } from './pro-custom/pro-custom.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    SwiperComponent,
    ProCustomComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
