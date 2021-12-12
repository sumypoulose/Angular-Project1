import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';  //for use input

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroListComponent } from './hero-list/hero-list.component';

import { HeroService } from './hero.service';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroListComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
