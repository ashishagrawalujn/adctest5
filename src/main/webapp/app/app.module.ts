import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { Adctest1SharedModule } from 'app/shared/shared.module';
import { Adctest1CoreModule } from 'app/core/core.module';
import { Adctest1AppRoutingModule } from './app-routing.module';
import { Adctest1HomeModule } from './home/home.module';
import { Adctest1EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    Adctest1SharedModule,
    Adctest1CoreModule,
    Adctest1HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    Adctest1EntityModule,
    Adctest1AppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class Adctest1AppModule {}
