import { Routes } from '@angular/router';
import { BodyContentComponent } from './body-content/body-content.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: BodyContentComponent},
    {path: 'aboutus', component: AboutUsComponent},
    {path: 'contactus', component: ContactUsComponent},
    {path: 'order/:id', component: OrderDetailsComponent}
];
