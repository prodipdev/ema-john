import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
  const fetchData = await fetch("products.json");
  const productsData = await fetchData.json();

  const storedCart = getShoppingCart();
  const savedCart = [];

  for (const id in storedCart) {
    const existProduct = productsData.find((product) => product.id === id);

    if (existProduct) {
      const quantity = storedCart[id];
      existProduct.quantity = quantity;
      savedCart.push(existProduct);
    }
  }
  return savedCart;
};

export default cartProductsLoader;
