import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { OrdersManagementsComponent } from './pages/orders-managements/orders-managements.component';
import { ProductsManagementsComponent } from './pages/products-managements/products-managements.component';
import { UsersManagementComponent } from './pages/users-management/users-management.component';
import { ProductsListingComponent } from './pages/products-listing/products-listing.component';
import { TemplatesListingsComponent } from './pages/templates-listings/templates-listings.component';
import { CategoriesManagementComponent } from './pages/categories-management/categories-management.component';
import { OrderPreviewComponent } from './pages/order-preview/order-preview.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'orders_management',
        component: OrdersManagementsComponent,
      },
      {
        path: 'orders_management/:id',
        component: OrderPreviewComponent,
      },
      {
        path: 'products_management',
        component: ProductsManagementsComponent,
        children: [
          {
            path: 'products_listing',
            component: ProductsListingComponent,
          },
          {
            path: 'templates',
            component: TemplatesListingsComponent,
          },
          {
            path: '**',
            redirectTo: 'products_listing',
          },
        ],
      },
      {
        path: 'categories_management',
        component: CategoriesManagementComponent,
      },
      {
        path: 'users_management',
        component: UsersManagementComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },
      {
        path: '**',
        redirectTo: 'users_management',
      },
    ],
  },
  {
    path: '**',
    redirectTo: '/login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
