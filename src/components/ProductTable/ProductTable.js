import './ProductTable.css';
import { ProductRow } from '..';

export function ProductTable({ products }) {
  return (
    <div className='product-table'>
      <span>Name</span><span>Price</span>
      {products.map((product) => {
        return <ProductRow
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
