import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MovingLineModule } from '../../projects/moving-line/src/lib/moving-line.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MovingLineModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
