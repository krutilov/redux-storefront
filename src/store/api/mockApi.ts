import { mockProducts } from "../mockProducts";

export const getData = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockProducts);
    }, 1000);
  });

export const getSingleProduct = (id: number) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = mockProducts.find((product) => product.id === id);
      resolve(product);
    }, 300);
  });

export const getDiscountPercent = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10);
    }, 150);
  });
