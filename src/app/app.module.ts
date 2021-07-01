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
import { PaginatorComponent } from './shared/components/paginator/paginator.component';
import { UserCardComponent } from './pages/components/user-card/user-card.component';
import { ShortNumberPipe } from './shared/pipes/short-number.pipe';
import { ProductsListingComponent } from './pages/products-listing/products-listing.component';
import { TemplatesListingsComponent } from './pages/templates-listings/templates-listings.component';
import { OrderItemComponent } from './pages/components/order-item/order-item.component';
import { ProductCardComponent } from './pages/components/product-card/product-card.component';
import { CategoriesManagementComponent } from './pages/categories-management/categories-management.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
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
    PaginatorComponent,
    UserCardComponent,
    ShortNumberPipe,
    ProductsListingComponent,
    TemplatesListingsComponent,
    OrderItemComponent,
    ProductCardComponent,
    CategoriesManagementComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
