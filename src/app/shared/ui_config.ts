import { SideMenuPage } from './../shared/interfaces/ui_interfaces';
export const PAGES: Array<SideMenuPage> = [
  {
    url: '/orders_management',
    name: 'orders Management',
    icon: 'fas fa-box',
  },
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
    url: '/settings',
    name: 'Account Settings',
    icon: 'fas fa-cogs',
  },
];
