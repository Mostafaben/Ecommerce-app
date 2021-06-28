import { AdminDetails } from './shared/interfaces/admin_interfaces';
import { Order } from './shared/interfaces/orders_interfaces';
import { Product } from './shared/interfaces/product_interfaces';
import { UserDetails } from './shared/interfaces/user_interfaces';

export const ADMIN: AdminDetails = {
  name: 'Admin Name',
  email: 'admin_email@gmail.com',
  imageUrl: null,
};

export const USERS: Array<UserDetails> = [
  {
    id: 1,
    name: 'Mostafa ben',
    email: 'fm_benlagha@esi.dz',
    createdAt: new Date(),
    isVerified: true,
    numberOfOrders: 10,
    imageUrl: 'https://picsum.photos/400',
  },
  {
    id: 2,
    name: 'Raid lamri',
    email: 'fm_benlagha@esi.dz',
    createdAt: new Date(),
    isVerified: false,
    numberOfOrders: 12,
    imageUrl: 'https://picsum.photos/123',
  },
  {
    id: 3,
    name: 'Houssem Telli',
    email: 'fm_benlagha@esi.dz',
    createdAt: new Date(),
    isVerified: true,
    numberOfOrders: 3,
    imageUrl: null,
  },
  {
    id: 1,
    name: 'Ismail Lakhlaf',
    email: 'fm_benlagha@esi.dz',
    createdAt: new Date(),
    isVerified: true,
    numberOfOrders: 10,
    imageUrl: 'https://picsum.photos/400',
  },
  {
    id: 2,
    name: 'Karim Tamani',
    email: 'fm_benlagha@esi.dz',
    createdAt: new Date(),
    isVerified: false,
    numberOfOrders: 123132,
    imageUrl: 'https://picsum.photos/123',
  },
];

export const PRODUCTS: Array<Product> = [
  { id: 1, name: 'IPHONE 1' },
  { id: 1, name: 'GALAXY S20' },
  { id: 1, name: 'T-SHIRT' },
];

export const ORDERS: Array<Order> = [
  {
    id: 1,
    user: USERS[0],
    totalPrice: 10040,
    createdAt: new Date(),
    products: PRODUCTS,
    status: false,
    quantity: 10,
  },
  {
    id: 2,
    user: USERS[1],
    totalPrice: 10040,
    createdAt: new Date(),
    products: PRODUCTS,
    status: false,
    quantity: 10,
  },
  {
    id: 13,
    user: USERS[2],
    totalPrice: 10040,
    createdAt: new Date(),
    products: PRODUCTS,
    status: false,
    quantity: 10,
  },
  {
    id: 12,
    user: USERS[3],
    totalPrice: 10040,
    createdAt: new Date(),
    products: PRODUCTS.slice(0, 2),
    status: false,
    quantity: 10,
  },
  {
    id: 4,
    user: USERS[4],
    totalPrice: 10040,
    createdAt: new Date(),
    products: PRODUCTS,
    status: false,
    quantity: 10,
  },
];
