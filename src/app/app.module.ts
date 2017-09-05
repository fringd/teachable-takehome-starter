import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule, Routes } from '@angular/router';


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
import { ShowGemComponent } from './show-gem/show-gem.component';
import { SearchGemsComponent } from './search-gems/search-gems.component';

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


const appRoutes: Routes = [
    { path: 'gems/:id',      component: ShowGemComponent },
    {
          path: 'gems',
          component: SearchGemsComponent,
          data: { title: 'Heroes List' }
        },
    { path: '',
          redirectTo: '/gems',
          pathMatch: 'full'
        },
];


@NgModule({
  declarations: [
    AppComponent,
    GemComponent,
    ShowGemComponent,
    SearchGemsComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot( appRoutes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
