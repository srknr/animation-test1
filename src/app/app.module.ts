import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AnimationComponent } from './animation/animation.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule, BrowserAnimationsModule ],
  declarations: [ AppComponent, AnimationComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
