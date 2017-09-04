import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {
    MdButtonModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule
} from '@angular/material';
import { GemComponent } from './gem/gem.component';

@NgModule({
    imports: [
          MdButtonModule,
          MdMenuModule,
          MdToolbarModule,
          MdIconModule,
          MdCardModule
        ],
    exports: [
          MdButtonModule,
          MdMenuModule,
          MdToolbarModule,
          MdIconModule,
          MdCardModule
        ]
})
export class MaterialModule {}

@NgModule({
  declarations: [
    AppComponent,
    GemComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
