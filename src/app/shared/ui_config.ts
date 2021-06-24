import { MenuPage } from './../shared/interfaces/ui_interfaces';
export const PAGES: Array<MenuPage> = [
  {
    url: '/users_management',
    name: 'Users Managements',
    icon: 'far fa-user',
  },
  {
    url: '/products_management',
    name: 'Products Managements',
    icon: 'fas fa-archive',
  },
  {
    url: '/orders_management',
    name: 'orders Management',
    icon: 'fas fa-box',
  },
  {
    url: '/settings',
    name: 'Account Settings',
    icon: 'fas fa-cogs',
  },
];

export const PRODUCTS_MANAGEMENT_PAGES: Array<MenuPage> = [
  {
    url: 'products_listing',
    name: 'Products',
    icon: 'fas fa-archive',
  },
  {
    url: 'templates',
    name: 'templates',
    icon: 'fas fa-shapes',
  },
];
