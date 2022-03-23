import "./ProductRow.css";

export function ProductRow({ prod }) {
  
  return(
      <div className="product_row">
          <span>{prod.name}</span>
          <span>{prod.price}</span>
      </div>    
  )
}