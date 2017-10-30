import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { EmitentsComponent } from './emitents/emitents.component';
import { CouponsComponent } from './coupons/coupons.component';
 
const routes: Routes = [
  { path: '', redirectTo: '/emitents', pathMatch: 'full' }
  , { path: 'login',     component: LoginComponent }
  , { path: 'emitents',  component: EmitentsComponent, canActivate: [AuthGuard] }
  , { path: 'coupons',   component: CouponsComponent, canActivate: [AuthGuard] }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ]
  , exports: [ RouterModule ]
  , declarations: []
})
export class AppRoutingModule {}