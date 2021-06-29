import { AdminDetails } from './shared/interfaces/admin_interfaces';
import { Order } from './shared/interfaces/orders_interfaces';
import { Product } from './shared/interfaces/product_interfaces';
import { UserDetails } from './shared/interfaces/user_interfaces';

import * as faker from 'faker';

export const ADMIN: AdminDetails = {
  name: faker.name.findName(),
  email: faker.internet.email(),
  imageUrl: faker.image.avatar(),
};

export const PRODUCTS: Array<Product> = new Array(10)
  .fill(null)
  .map((_, index) => {
    return {
      id: index,
      price: parseInt(faker.commerce.price()),
      name: faker.commerce.product(),
      imageUrl: faker.image.image(),
    };
  });

export const USERS: Array<UserDetails> = new Array(7)
  .fill(null)
  .map((_, index) => {
    return {
      id: index,
      name: faker.name.findName(),
      email: faker.internet.email(),
      imageUrl: faker.image.avatar(),
      isVerified: faker.datatype.boolean(),
      createdAt: faker.date.past(),
      address: faker.address.streetName(),
      phoneNumber: faker.phone.phoneNumber(),
      numberOfOrders: faker.datatype.number(),
    };
  });

export const ORDERS: Array<Order> = new Array(5).fill(null).map((_, index) => {
  return {
    id: faker.datatype.number(),
    user: USERS[index],
    totalPrice: parseInt(faker.commerce.price()),
    createdAt: faker.date.past(),
    products: PRODUCTS,
    status: faker.datatype.boolean(),
    quantity: faker.datatype.number(),
  };
});
