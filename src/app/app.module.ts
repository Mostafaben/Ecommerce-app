import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { SideMenuComponent } from './pages/components/side-menu/side-menu.component';
import { NavBarComponent } from './pages/components/nav-bar/nav-bar.component';
import { UsersManagementComponent } from './pages/users-management/users-management.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ProductsManagementsComponent } from './pages/products-managements/products-managements.component';
import { OrdersManagementsComponent } from './pages/orders-managements/orders-managements.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    SideMenuComponent,
    NavBarComponent,
    UsersManagementComponent,
    SettingsComponent,
    ProductsManagementsComponent,
    OrdersManagementsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
