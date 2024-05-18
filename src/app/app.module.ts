import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importer FormsModule pour ngModel
import { ReactiveFormsModule } from '@angular/forms'; // Importer ReactiveFormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { EquipmentComponent } from './equipment/equipment.component'; // Importer EquipmentComponent
import { FooterComponent } from './footer/footer.component'; // Importer FooterComponent
import { ShopComponent } from './shop/shop.component'; // Importer ShopComponent
import { CartComponent } from './cart/cart.component'; // Importer CartComponent
import { OffreComponent } from './offre/offre.component'; // Importer OffreComponent
import { CoursComponent } from './cours/cours.component'; // Importer CoursComponent
import { PaiementComponent } from './paiement/paiement.component'; // Importer PaiementComponent
import { AboutUsComponent } from './about-us/about-us.component';
import { ProfileComponent } from './profile/profile.component';
import { SuperAdminComponent } from './super-admin/super-admin.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ListAdminComponent } from './list-admin/list-admin.component';
import { ListRoomComponent } from './list-room/list-room.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminComponent } from './admin/admin.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { ProductManagementComponent } from './product-management/product-management.component';
import { CoachManagementComponent } from './coach-management/coach-management.component';
import { EquipmentManagementComponent } from './equipment-management/equipment-management.component';
import { OfferManagementComponent } from './offer-management/offer-management.component';
import { OrderManagementComponent } from './order-management/order-management.component';
import { MemberManagementComponent } from './member-management/member-management.component';
import { CoachComponent } from './coach/coach.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginCoachComponent } from './login-coach/login-coach.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    HomeComponent,
    SignupComponent,
    LoginComponent,
    HeaderComponent,
    EquipmentComponent, // Ajouter EquipmentComponent aux déclarations
    FooterComponent, // Ajouter FooterComponent aux déclarations
    ShopComponent, // Ajouter ShopComponent aux déclarations
    CartComponent, // Ajouter CartComponent aux déclarations
    OffreComponent, // Ajouter OffreComponent aux déclarations
    CoursComponent, // Ajouter CoursComponent aux déclarations
    PaiementComponent, // Ajouter PaiementComponent aux déclarations
    AboutUsComponent, ProfileComponent, SuperAdminComponent, SidebarComponent,
    ListAdminComponent,ListRoomComponent, AdminComponent, AdminSidebarComponent, ProductManagementComponent, CoachManagementComponent, EquipmentManagementComponent, OfferManagementComponent, OrderManagementComponent, MemberManagementComponent, CoachComponent, LoginAdminComponent, LoginCoachComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Ajouter FormsModule aux imports
    ReactiveFormsModule, BrowserAnimationsModule // Ajouter ReactiveFormsModule aux imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
