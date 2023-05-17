import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
  const storedCart = getShoppingCart();
  const ids = Object.keys(storedCart);

  const fetchData = await fetch(`http://localhost:5000/productsByIds`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(ids),
  });
  const productsData = await fetchData.json();
  console.log(productsData);
  const savedCart = [];

  for (const id in storedCart) {
    const existProduct = productsData.find((product) => product._id === id);

    if (existProduct) {
      const quantity = storedCart[id];
      existProduct.quantity = quantity;
      savedCart.push(existProduct);
    }
  }
  return savedCart;
};

export default cartProductsLoader;
