import React, { useContext, useReducer } from "react";
import { faker } from '@faker-js/faker';
import {v4 as uuid} from "uuid";
import { cartReducer } from "./Reducer";

const Cart = React.createContext();
faker.seed(99);
const Context = ({ children }) => {


  const products = [...Array(20)].map(() => ({
    id: uuid(),
    name: faker.commerce.productName(),
    price: faker.commerce.price(),
    image: faker.image.animals(),
    inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  }));

  console.log(products)

  const initialState = {
    products: products,
    cart: []
  };

  const [state,dispatch] = useReducer(cartReducer, initialState)

  return <Cart.Provider value={{state,dispatch}}>{children}</Cart.Provider>;
};

export default Context;

export const CartState = () => {
  return useContext(Cart)
}