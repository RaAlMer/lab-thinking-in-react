import { useState } from 'react';
import jsonData from '../../data.json';
import { SearchBar, ProductTable } from '..';
import "./ProductsPage.css";

export function ProductsPage () {
  const [products, setProducts] = useState(jsonData);
  const [searchProd, setSearchProd] = useState("");
  const [filterProd, setFilterProd] = useState(jsonData);

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
  };
  
  return(
      <div className='product-page'>
        <h1>IronStore</h1>
        <SearchBar 
          search={searchProd}
          setSearchProd={setSearchProd}
          searchProduct={searchProduct}
        />
        <ProductTable products={products}/>
      </div>    
  )
}