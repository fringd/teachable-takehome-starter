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
    MdTabsModule,
    MdIconModule,
    MdCardModule,
    MdInputModule
} from '@angular/material';
import { GemComponent } from './gem/gem.component';
import { ListFavoritesComponent } from './list-favorites/list-favorites.component';
import { ShowGemComponent } from './show-gem/show-gem.component';
import { SearchGemsComponent } from './search-gems/search-gems.component';
import { FavoritesService } from "./favorites.service";
@NgModule({
    imports: [
          MdButtonModule,
          MdMenuModule,
          MdToolbarModule,
          MdIconModule,
          MdCardModule,
          MdInputModule,
          MdTabsModule,
        ],
    exports: [
          MdButtonModule,
          MdMenuModule,
          MdToolbarModule,
          MdIconModule,
          MdCardModule,
          MdInputModule,
          MdTabsModule,
        ]
})
export class MaterialModule {}


const appRoutes: Routes = [
    { path: 'gems/:id',      component: ShowGemComponent },
    {
          path: 'gems',
          component: SearchGemsComponent,
          data: { title: 'Gem search' }
        },
    {
          path: 'favorites',
          component: ListFavoritesComponent,
          data: { title: 'Favorite gems' }
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
    ListFavoritesComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    MaterialModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot( appRoutes, { enableTracing: true })
  ],
  providers: [ FavoritesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
