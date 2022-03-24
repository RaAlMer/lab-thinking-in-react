import "./SearchBar.css";

export function SearchBar({
  search,
  setSearchProd,
  searchProduct,
  checkProduct
}) {
  const handleChange = (prod) => {
    searchProduct(prod);
    setSearchProd(prod);
  };

  const handleCheck = () => {
    checkProduct();
  };

  return (
    <div className="search-container">
      <label>Search</label>
      <input
        value={search}
        type="search"
        onChange={(e) => handleChange(e.target.value)}
        placeholder="Enter search query"
      />
      <label>
        <input type="checkbox" onChange={() => handleCheck()} />
        Only show products in stock
      </label>
    </div>
  );
}
