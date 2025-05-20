import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductComponent } from './pages/product/product.component';
import { AboutComponent } from './pages/about/about.component';
import { CapablitiesComponent } from './pages/capablities/capablities.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MayurenterComponent } from './pages/mayurenter/mayurenter.component';
import { VeerenterComponent } from './pages/veerenter/veerenter.component';
import { BusinessComponent } from './pages/business/business.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'products', component: ProductComponent },
  { path: 'capabilities', component: CapablitiesComponent },
  { path: 'contactus', component: ContactComponent },
  { path: 'mayurenterprises', component: MayurenterComponent },
  { path: 'veerenterprises', component: VeerenterComponent },
  { path: 'business', component: BusinessComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
