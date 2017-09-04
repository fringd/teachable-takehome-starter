import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import {
    MdButtonModule,
    MdMenuModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MdInputModule
} from '@angular/material';
import { GemComponent } from './gem/gem.component';

@NgModule({
    imports: [
          MdButtonModule,
          MdMenuModule,
          MdToolbarModule,
          MdIconModule,
          MdCardModule,
          MdInputModule,
        ],
    exports: [
          MdButtonModule,
          MdMenuModule,
          MdToolbarModule,
          MdIconModule,
          MdCardModule,
          MdInputModule,
        ]
})
export class MaterialModule {}

@NgModule({
  declarations: [
    AppComponent,
    GemComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
