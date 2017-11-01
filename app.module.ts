import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { GlobalEventsManager } from './services/global-events-manager.service';
import { LocalStorageService } from './services/local-storage.service';
import { HttpService } from './services/http.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatDialogModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatGridListModule } from '@angular/material';


import 'hammerjs';
import { AuthGuard } from './guards/auth.guard';
import { AuthenticationService } from './services/authentication.service';
import { EmitentsComponent } from './emitents/emitents.component';
import { HeaderComponent } from './header/header.component';
import { CouponsComponent } from './coupons/coupons.component';
import { LoginComponent } from './login/login.component';

import { KeyNameDialog } from './emitents/emitents.component';
import { MakeEmitentDialog } from './emitents/emitents.component';

@NgModule({
  imports: [
    BrowserModule
    , HttpModule
    , AppRoutingModule
    , BrowserAnimationsModule
    , FormsModule

    , MatInputModule
    , MatToolbarModule
    , MatButtonModule
    , MatDialogModule
    , MatCardModule
    , MatGridListModule
  ]
  , declarations: [
    AppComponent
    , EmitentsComponent
    , HeaderComponent
    , CouponsComponent
    , LoginComponent

    , KeyNameDialog
    , MakeEmitentDialog
  ]
  , providers: [
    AuthGuard
    , AuthenticationService
    , GlobalEventsManager
    , LocalStorageService
    , HttpService
  ]
  , bootstrap: [AppComponent]
  , entryComponents: [
    KeyNameDialog
    , MakeEmitentDialog
  ]
})
export class AppModule { }
