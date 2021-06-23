import { AdminDetails } from './shared/interfaces/admin_interfaces';
import { UserDetails } from './shared/interfaces/user_interfaces';

export const ADMIN: AdminDetails = {
  name: 'Admin Name',
  email: 'admin_email@gmail.com',
  imageUrl: 'https://picsum.photos/400',
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
    name: 'Mostafa ben',
    email: 'fm_benlagha@esi.dz',
    createdAt: new Date(),
    isVerified: false,
    numberOfOrders: 12,
    imageUrl: 'https://picsum.photos/123',
  },
  {
    id: 3,
    name: 'Mostafa ben',
    email: 'fm_benlagha@esi.dz',
    createdAt: new Date(),
    isVerified: true,
    numberOfOrders: 3,
    imageUrl: 'https://picsum.photos/200',
  },
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
    name: 'Mostafa ben',
    email: 'fm_benlagha@esi.dz',
    createdAt: new Date(),
    isVerified: false,
    numberOfOrders: 123132,
    imageUrl: 'https://picsum.photos/123',
  },
];
