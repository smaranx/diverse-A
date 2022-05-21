import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';  
import { NgwWowModule } from 'ngx-wow';
import { AngularTypewriterEffectModule } from 'angular-typewriter-effect';

import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { MainPageComponent } from './main-page/main-page.component';


@NgModule({
  declarations: [
    AppComponent,
    
    LandingComponent,
    
    NavbarComponent,
    FooterComponent,
    MainPageComponent,
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SlickCarouselModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    NgwWowModule,
    AngularTypewriterEffectModule,
    AnimateOnScrollModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
