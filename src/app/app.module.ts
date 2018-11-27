import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from './components/components.module';
import { NotifierModule } from 'angular-notifier';
import { notifierDefaultOptions } from './helpers/consts/consts.helpers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ComponentsModule,
    NotifierModule.withConfig(notifierDefaultOptions)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
