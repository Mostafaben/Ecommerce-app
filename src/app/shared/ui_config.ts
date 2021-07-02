import { MenuPage } from './../shared/interfaces/ui_interfaces';
export const PAGES: Array<MenuPage> = [
  {
    url: '/users_management',
    name: 'Users Managements',
    icon: 'far fa-user',
  },
  {
    url: '/orders_management',
    name: 'Orders Management',
    icon: 'fas fa-box',
  },
  {
    url: '/products_management',
    name: 'Products Managements',
    icon: 'fas fa-archive',
  },
  {
    url: '/categories_management',
    name: 'Categories Management',
    icon: 'fas fa-stream',
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
