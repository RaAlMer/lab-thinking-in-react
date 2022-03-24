import "./ProductTable.css";
import { ProductRow } from "..";

export function ProductTable({
  products,
  filterProducts,
  searchProd,
  checkProd,
  boolCheck,
  checkFilterProd
}) {
  return (
    <div className="table_container">
      <table>
        <tr className="headers">
          <th>Name</th>
          <th>Price</th>
        </tr>
        {boolCheck
          ? searchProd.length > 0
            ? checkFilterProd.map((product) => (
                <ProductRow
                  key={product.id}
                  prod={{
                    name: product.name,
                    price: product.price,
                    stock: product.inStock
                  }}
                />
              ))
            : checkProd.map((product) => (
                <ProductRow
                  key={product.id}
                  prod={{
                    name: product.name,
                    price: product.price,
                    stock: product.inStock
                  }}
                />
              ))
          : searchProd.length > 0
          ? filterProducts.map((product) => (
              <ProductRow
                key={product.id}
                prod={{
                  name: product.name,
                  price: product.price,
                  stock: product.inStock
                }}
              />
            ))
          : products.map((product) => (
              <ProductRow
                key={product.id}
                prod={{
                  name: product.name,
                  price: product.price,
                  stock: product.inStock
                }}
              />
            ))}
      </table>
    </div>
  );
}
