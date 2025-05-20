import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductComponent } from './pages/product/product.component';
import { CapablitiesComponent } from './pages/capablities/capablities.component';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { VeerenterComponent } from './pages/veerenter/veerenter.component';
import { MayurenterComponent } from './pages/mayurenter/mayurenter.component';
import { BusinessComponent } from './pages/business/business.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductComponent,
    CapablitiesComponent,
    VeerenterComponent,
    MayurenterComponent,
    BusinessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxImageZoomModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }