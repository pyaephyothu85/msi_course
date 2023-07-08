import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { DetailComponent } from './detail/detail.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxSkeletonLoaderModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
