import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { ClientRegisterComponent } from './components/clientRegister/clientRegister.component';
import { ToastrModule } from 'ngx-toastr';
import { NavComponent } from './components/nav/nav.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddressComponent } from './components/address/address.component';
import { RenterRegisterComponent } from './components/renter-register/renter-register.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { RenterComponent } from './components/renter/renter.component';
import { ClientComponent } from './components/client/client.component';
import { RenterAccountComponent } from './components/renter-account/renter-account.component';
import { ClientAccountComponent } from './components/client-account/client-account.component';
import { ProductComponent } from './components/products/product/product.component';
import { ProductUpdateComponent } from './components/products/product-update/product-update.component';
import { ProductAddComponent } from './components/products/product-add/product-add.component';
import { ProductRentComponent } from './components/products/product-rent/product-rent.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ProductDetailComponent } from './components/products/product-detail/product-detail.component';
import { ProductFilterComponent } from './components/products/product-filter/product-filter.component';


export function tokenGetter() {
  return localStorage.getItem("token");
}
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClientRegisterComponent,
    NavComponent,
    AddressComponent,
    RenterRegisterComponent,
    RenterComponent,
    ClientComponent,
    RenterAccountComponent,
    ClientAccountComponent,
    ProductComponent,
    ProductUpdateComponent,
    ProductAddComponent,
    ProductRentComponent,
    FilterPipe,
    ProductDetailComponent,
    ProductFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config:{
        tokenGetter: tokenGetter,
    }
  }),
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
