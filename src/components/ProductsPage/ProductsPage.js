import { useState } from "react";
import jsonData from "../../data.json";
import { SearchBar, ProductTable } from "..";
import "./ProductsPage.css";

export function ProductsPage() {
  const [products, setProducts] = useState(jsonData);
  const [searchProd, setSearchProd] = useState("");
  const [filterProd, setFilterProd] = useState(jsonData);
  const [checkProd, setCheckProd] = useState(jsonData);
  const [checkFilterProd, setCheckFilterProd] = useState(jsonData);
  const [boolCheck, setBoolCheck] = useState(false);

  const searchProduct = (searchProd) => {
    const prodFiltered = !searchProd
      ? products
      : filterProd.filter((product) =>
          product.name
            .toString()
            .toLowerCase()
            .includes(searchProd.toLocaleLowerCase())
        );
    setFilterProd(prodFiltered);
    const checkFiltered = !searchProd
      ? products
      : checkFilterProd.filter((product) =>
          product.name
            .toString()
            .toLowerCase()
            .includes(searchProd.toLocaleLowerCase())
        );
    setCheckFilterProd(checkFiltered);
  };

  const checkProduct = () => {
    const check = checkProd.filter((product) => {
      return product.inStock === true;
    });
    setBoolCheck(!boolCheck);
    setCheckProd(check);
    const checkFilter = checkFilterProd.filter((product) => {
      return product.inStock === true;
    });
    setCheckFilterProd(checkFilter);
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
        products={products}
        filterProducts={filterProd}
        searchProd={searchProd}
        checkProd={checkProd}
        checkFilterProd={checkFilterProd}
        boolCheck={boolCheck}
      />
    </div>
  );
}
