import { useState } from "react";
import jsonData from "../../data.json";
import { SearchBar, ProductTable } from "..";
import "./ProductsPage.css";

export function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [searchProd, setSearchProd] = useState("");
  const [filterProd, setFilterProd] = useState(products);
  const [checkProd, setCheckProd] = useState(products);
  const [boolCheck, setBoolCheck] = useState(false);

  const searchProduct = (searchProd) => {
    const prodFiltered = !searchProd
      ? products
      : products.filter((product) =>
          product.name
            .toString()
            .toLowerCase()
            .includes(searchProd.toLocaleLowerCase())
        );
    setFilterProd(prodFiltered);
    setCheckProd(prodFiltered);
  };

  const checkProduct = () => {
    const check = checkProd.filter((product) => {
      return product.inStock === true;
    });
    setBoolCheck(!boolCheck);
    setCheckProd(check);
  };

  return (
    <div className="product-page">
      <h1>IronStore</h1>
      <SearchBar
        search={searchProd}
        setSearchProd={setSearchProd}
        searchProduct={searchProduct}
        checkProduct={checkProduct}
      />
      <ProductTable
        filterProducts={filterProd}
        checkProd={checkProd}
        boolCheck={boolCheck}
      />
    </div>
  );
}
