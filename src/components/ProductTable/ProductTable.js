import './ProductTable.css';
import { ProductRow } from '..';

export function ProductTable({ products }) {
  return (
    <div>
      {console.log(products)}
      <h1>Table</h1>
      {products.map((product) => {
        <ProductRow
          key={product.id}
          prod={{
              name: product.name,
              price: product.price,
              stock: product.inStock
          }}
        />;
      })}
    </div>
  );
}
