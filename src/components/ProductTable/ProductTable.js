import "./ProductTable.css";
import { ProductRow } from "..";

export function ProductTable({
  filterProducts,
  checkProd,
  boolCheck,
}) {
  return (
    <div className="table_container">
      <table>
        <tr className="headers">
          <th>Name</th>
          <th>Price</th>
        </tr>
          {boolCheck
            ? checkProd.map((product) => (
                <ProductRow
                  key={product.id}
                  prod={{
                    name: product.name,
                    price: product.price,
                    stock: product.inStock
                  }}
                />
              ))
          : filterProducts.map((product) => (
              <ProductRow
                key={product.id}
                prod={{
                  name: product.name,
                  price: product.price,
                  stock: product.inStock
                }}
              />
            ))
          }
      </table>
    </div>
  );
}
