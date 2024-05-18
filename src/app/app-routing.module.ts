import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';
import { OffreComponent } from './offre/offre.component';
import { CoursComponent } from './cours/cours.component';
import { PaiementComponent } from './paiement/paiement.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ProfileComponent } from './profile/profile.component';
import { SuperAdminComponent } from './super-admin/super-admin.component';
import { ListAdminComponent } from './list-admin/list-admin.component';
import { ListRoomComponent } from './list-room/list-room.component';
import { AdminComponent } from './admin/admin.component';
import { ProductManagementComponent } from './product-management/product-management.component';
import { CoachManagementComponent } from './coach-management/coach-management.component';
import { EquipmentManagementComponent } from './equipment-management/equipment-management.component';
import { OfferManagementComponent } from './offer-management/offer-management.component';
import { OrderManagementComponent } from './order-management/order-management.component';
import { MemberManagementComponent } from './member-management/member-management.component';
import { CoachComponent } from './coach/coach.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginCoachComponent } from './login-coach/login-coach.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'equipment', component: EquipmentComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'cart', component: CartComponent },
  { path: 'offers', component: OffreComponent },
  { path: 'courses', component: CoursComponent },
  { path: 'payment', component: PaiementComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'profile', component: ProfileComponent },
  {path :'superadmin',component:SuperAdminComponent},
  {path : 'admin-list' , component:ListAdminComponent },
  {path:'rooms',component:ListRoomComponent},
  {path:'admin',component:AdminComponent},
  {path:'admin-products',component:ProductManagementComponent},
  {path:'admin-coaches',component:CoachManagementComponent},
  { path: 'admin-equipments', component: EquipmentManagementComponent },
  { path: 'admin-offers', component: OfferManagementComponent },
  { path: 'admin-orders', component: OrderManagementComponent },
  { path: 'admin-members', component: MemberManagementComponent},
  { path: 'coach', component: CoachComponent },
  { path: 'loginadmin', component: LoginAdminComponent },
  { path: 'logincoach', component: LoginCoachComponent },










   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
