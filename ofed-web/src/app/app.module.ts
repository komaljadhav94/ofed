import { BrowserModule } from '@angular/platform-browser';

import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { CommonModule} from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyContentComponent } from './body-content/body-content.component';
import { LoginModelComponent } from './login-model/login-model.component';
import { HttpClientModule } from '@angular/common/http';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RouterModule } from '@angular/router';
import { routes } from './app-router';
import { MakePaymentComponent } from './order-details/make-payment/make-payment.component';
import { OrderSuccessComponent } from './order-details/order-success/order-success.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyContentComponent,
    LoginModelComponent,
    OrderDetailsComponent,
    AboutUsComponent,
    ContactUsComponent,
    MakePaymentComponent,
    OrderSuccessComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
