import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MovingLineModule} from 'moving-line';

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
