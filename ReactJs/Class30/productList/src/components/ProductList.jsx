import { Product } from "./Product";

const ProductList = () => {
  const products = [
    "Product 1",
    "Product 2",
    "Product 3",
    "Product 4",
    "Product 5",
    "Product 6",
    "Product 7",
    "Product 8",
  ];
  return (
    // forEach, map, filter, reduce, for
    <div>
        {
            products.map(product => {
                return <Product name={product} />
            })
        }
    </div>
  );
};

export default ProductList;
